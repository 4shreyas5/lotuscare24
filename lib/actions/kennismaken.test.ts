import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/forms/rate-limit", () => ({
  isRateLimited: () => false,
  getRateLimitKey: async () => "test-key",
}));

const { sendNotificationEmailMock } = vi.hoisted(() => ({
  sendNotificationEmailMock: vi.fn(async () => ({ delivered: true }) as const),
}));

vi.mock("@/lib/forms/email", () => ({
  sendNotificationEmail: sendNotificationEmailMock,
}));

import { submitKennismakenForm } from "@/lib/actions/kennismaken";
import { HONEYPOT_FIELD_NAME, TIMESTAMP_FIELD_NAME } from "@/lib/forms/spam";
import { idleState } from "@/lib/forms/state";

function validFormData(overrides: Record<string, string> = {}): FormData {
  const fd = new FormData();
  fd.set("naam", "Marieke de Vries");
  fd.set("email", "marieke@example.com");
  fd.set("telefoon", "");
  fd.set("contactmethode", "telefonisch");
  fd.set("omschrijving", "Ik zoek ondersteuning voor mijn moeder.");
  fd.set(HONEYPOT_FIELD_NAME, "");
  fd.set(TIMESTAMP_FIELD_NAME, String(Date.now() - 5000));
  for (const [k, v] of Object.entries(overrides)) fd.set(k, v);
  return fd;
}

beforeEach(() => {
  sendNotificationEmailMock.mockClear();
  sendNotificationEmailMock.mockResolvedValue({ delivered: true });
});

describe("submitKennismakenForm", () => {
  it("requires a chosen contact method", async () => {
    const fd = validFormData({ contactmethode: "" });
    const result = await submitKennismakenForm(idleState(), fd);
    expect(result.status).toBe("error");
    expect(result.errors.contactmethode).toBeTruthy();
    expect(sendNotificationEmailMock).not.toHaveBeenCalled();
  });

  it("accepts a valid submission without asking for medical details", async () => {
    const result = await submitKennismakenForm(idleState(), validFormData());
    expect(result.status).toBe("success");
    expect(sendNotificationEmailMock).toHaveBeenCalledTimes(1);
  });

  it("silently accepts a spam submission without sending email", async () => {
    const fd = validFormData({ [HONEYPOT_FIELD_NAME]: "https://spam.example" });
    const result = await submitKennismakenForm(idleState(), fd);
    expect(result.status).toBe("success");
    expect(sendNotificationEmailMock).not.toHaveBeenCalled();
  });
});
