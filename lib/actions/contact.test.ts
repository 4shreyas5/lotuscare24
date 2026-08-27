import { beforeEach, describe, expect, it, vi } from "vitest";

// Rate limiting has its own unit tests (lib/forms/rate-limit.test.ts); mocking
// it away here keeps these tests isolated from its shared, module-level
// bucket map and focused on validation/spam/email control flow.
vi.mock("@/lib/forms/rate-limit", () => ({
  isRateLimited: () => false,
  getRateLimitKey: async () => "test-key",
}));

const { sendNotificationEmailMock } = vi.hoisted(() => {
  // Mirrors sendNotificationEmail's real signature so mockResolvedValue and
  // mock.calls[n][0] stay typed as the full EmailResult union / args shape.
  type Args = { to: string | undefined; subject: string; text: string; replyTo?: string };
  type EmailResult = { delivered: true } | { delivered: false; reason: "not_configured" | "send_failed" };
  return {
    sendNotificationEmailMock: vi.fn<(args: Args) => Promise<EmailResult>>(async () => ({
      delivered: true,
    })),
  };
});

vi.mock("@/lib/forms/email", () => ({
  sendNotificationEmail: sendNotificationEmailMock,
}));

import { submitContactForm } from "@/lib/actions/contact";
import { HONEYPOT_FIELD_NAME, TIMESTAMP_FIELD_NAME } from "@/lib/forms/spam";
import { idleState } from "@/lib/forms/state";

function validFormData(overrides: Record<string, string> = {}): FormData {
  const fd = new FormData();
  fd.set("naam", "Jan Jansen");
  fd.set("email", "jan@example.com");
  fd.set("telefoon", "");
  fd.set("onderwerp", "Vraag over thuiszorg");
  fd.set("bericht", "Ik heb een vraag over de mogelijkheden.");
  fd.set(HONEYPOT_FIELD_NAME, "");
  fd.set(TIMESTAMP_FIELD_NAME, String(Date.now() - 5000));
  for (const [k, v] of Object.entries(overrides)) fd.set(k, v);
  return fd;
}

beforeEach(() => {
  sendNotificationEmailMock.mockClear();
  sendNotificationEmailMock.mockResolvedValue({ delivered: true });
});

describe("submitContactForm", () => {
  it("returns field errors for an invalid submission and does not send email", async () => {
    const fd = validFormData({ naam: "", email: "not-an-email" });
    const result = await submitContactForm(idleState(), fd);
    expect(result.status).toBe("error");
    expect(result.errors.naam).toBeTruthy();
    expect(result.errors.email).toBeTruthy();
    expect(sendNotificationEmailMock).not.toHaveBeenCalled();
  });

  it("accepts a valid submission and sends the notification email", async () => {
    const result = await submitContactForm(idleState(), validFormData());
    expect(result.status).toBe("success");
    expect(sendNotificationEmailMock).toHaveBeenCalledTimes(1);
    const call = sendNotificationEmailMock.mock.calls[0]![0];
    expect(call.subject).toContain("Vraag over thuiszorg");
    expect(call.replyTo).toBe("jan@example.com");
  });

  it("silently accepts a spam submission (filled honeypot) without sending email", async () => {
    const fd = validFormData({ [HONEYPOT_FIELD_NAME]: "https://spam.example" });
    const result = await submitContactForm(idleState(), fd);
    expect(result.status).toBe("success");
    expect(sendNotificationEmailMock).not.toHaveBeenCalled();
  });

  it("returns a generic Dutch error, not the technical failure, when sending fails", async () => {
    sendNotificationEmailMock.mockResolvedValue({ delivered: false, reason: "send_failed" });
    const result = await submitContactForm(idleState(), validFormData());
    expect(result.status).toBe("error");
    expect(result.message).toBeTruthy();
    expect(result.message).not.toMatch(/resend|exception|stack/i);
  });

  it("still confirms receipt when email isn't configured, with a dev-only note", async () => {
    sendNotificationEmailMock.mockResolvedValue({ delivered: false, reason: "not_configured" });
    const result = await submitContactForm(idleState(), validFormData());
    expect(result.status).toBe("success");
    expect(result.devNote).toBeTruthy();
  });
});
