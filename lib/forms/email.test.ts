import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { sendNotificationEmail } from "@/lib/forms/email";

describe("sendNotificationEmail", () => {
  const originalKey = process.env.RESEND_API_KEY;
  const originalFrom = process.env.RESEND_FROM_EMAIL;

  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.RESEND_FROM_EMAIL;
  });

  afterEach(() => {
    if (originalKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalKey;
    if (originalFrom === undefined) delete process.env.RESEND_FROM_EMAIL;
    else process.env.RESEND_FROM_EMAIL = originalFrom;
  });

  it("reports not_configured instead of throwing or making a network call when unset", async () => {
    const result = await sendNotificationEmail({
      to: "test@example.com",
      subject: "Test",
      text: "Test bericht",
    });
    expect(result).toEqual({ delivered: false, reason: "not_configured" });
  });

  it("reports not_configured when no recipient is configured", async () => {
    process.env.RESEND_API_KEY = "re_test_key";
    process.env.RESEND_FROM_EMAIL = "LotusCare24 <noreply@example.com>";
    const result = await sendNotificationEmail({
      to: undefined,
      subject: "Test",
      text: "Test bericht",
    });
    expect(result).toEqual({ delivered: false, reason: "not_configured" });
  });
});
