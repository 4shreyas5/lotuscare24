import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/forms/rate-limit", () => ({
  isRateLimited: () => false,
  getRateLimitKey: async () => "test-key",
}));

const { sendNotificationEmailMock, storeCvMock } = vi.hoisted(() => {
  type EmailArgs = { to: string | undefined; subject: string; text: string; replyTo?: string };
  type EmailResult = { delivered: true } | { delivered: false; reason: "not_configured" | "send_failed" };
  type CvStorageResult =
    | { stored: true; pathname: string }
    | { stored: false; reason: "not_configured" | "upload_failed" };
  return {
    sendNotificationEmailMock: vi.fn<(args: EmailArgs) => Promise<EmailResult>>(async () => ({
      delivered: true,
    })),
    storeCvMock: vi.fn<(file: File, extension: string) => Promise<CvStorageResult>>(async () => ({
      stored: true,
      pathname: "sollicitaties/test.pdf",
    })),
  };
});

vi.mock("@/lib/forms/email", () => ({
  sendNotificationEmail: sendNotificationEmailMock,
}));

vi.mock("@/lib/forms/blob", async () => {
  const actual = await vi.importActual<typeof import("@/lib/forms/blob")>("@/lib/forms/blob");
  return {
    ...actual,
    storeCv: storeCvMock,
  };
});

import { submitSollicitatieForm } from "@/lib/actions/sollicitatie";
import { HONEYPOT_FIELD_NAME, TIMESTAMP_FIELD_NAME } from "@/lib/forms/spam";
import { idleState } from "@/lib/forms/state";
import { vacancies } from "@/lib/vacancies";

const PDF_HEADER = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x37]);

function validFormData(overrides: Record<string, string> = {}): FormData {
  const fd = new FormData();
  fd.set("naam", "Sofie Bakker");
  fd.set("email", "sofie@example.com");
  fd.set("telefoon", "");
  fd.set("functie", vacancies[0]!.slug);
  fd.set("motivatie", "Ik werk graag in de zorg en wil me graag aansluiten.");
  fd.set(HONEYPOT_FIELD_NAME, "");
  fd.set(TIMESTAMP_FIELD_NAME, String(Date.now() - 5000));
  for (const [k, v] of Object.entries(overrides)) fd.set(k, v);
  return fd;
}

beforeEach(() => {
  sendNotificationEmailMock.mockClear();
  sendNotificationEmailMock.mockResolvedValue({ delivered: true });
  storeCvMock.mockClear();
  storeCvMock.mockResolvedValue({ stored: true, pathname: "sollicitaties/test.pdf" });
});

describe("submitSollicitatieForm", () => {
  it("accepts a valid submission with no cv attached", async () => {
    const result = await submitSollicitatieForm(idleState(), validFormData());
    expect(result.status).toBe("success");
    expect(storeCvMock).not.toHaveBeenCalled();
    expect(sendNotificationEmailMock).toHaveBeenCalledTimes(1);
  });

  it("validates and stores a real cv file", async () => {
    const fd = validFormData();
    fd.set("cv", new File([PDF_HEADER], "cv.pdf", { type: "application/pdf" }));
    const result = await submitSollicitatieForm(idleState(), fd);
    expect(result.status).toBe("success");
    expect(storeCvMock).toHaveBeenCalledTimes(1);
  });

  it("rejects a file that isn't actually a pdf/doc/docx, regardless of its claimed type", async () => {
    const fd = validFormData();
    fd.set("cv", new File([new Uint8Array([0x4d, 0x5a, 0x90, 0x00])], "cv.pdf", { type: "application/pdf" }));
    const result = await submitSollicitatieForm(idleState(), fd);
    expect(result.status).toBe("error");
    expect(result.errors.cv).toBeTruthy();
    expect(storeCvMock).not.toHaveBeenCalled();
    expect(sendNotificationEmailMock).not.toHaveBeenCalled();
  });

  it("rejects a cv file over the size limit", async () => {
    const big = new Uint8Array(5 * 1024 * 1024 + 1);
    big.set(PDF_HEADER);
    const fd = validFormData();
    fd.set("cv", new File([big], "cv.pdf", { type: "application/pdf" }));
    const result = await submitSollicitatieForm(idleState(), fd);
    expect(result.status).toBe("error");
    expect(result.errors.cv).toBeTruthy();
  });

  it("still accepts the application when cv storage fails, and notes it in the internal email", async () => {
    storeCvMock.mockResolvedValue({ stored: false, reason: "upload_failed" });
    const fd = validFormData();
    fd.set("cv", new File([PDF_HEADER], "cv.pdf", { type: "application/pdf" }));
    const result = await submitSollicitatieForm(idleState(), fd);
    expect(result.status).toBe("success");
    const call = sendNotificationEmailMock.mock.calls[0]![0];
    expect(call.text).toMatch(/opslaan is mislukt/i);
  });
});
