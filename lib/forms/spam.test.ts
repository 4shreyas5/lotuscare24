import { describe, expect, it } from "vitest";

import { HONEYPOT_FIELD_NAME, isLikelySpam, TIMESTAMP_FIELD_NAME } from "@/lib/forms/spam";

function formDataWith(fields: Record<string, string>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) fd.set(key, value);
  return fd;
}

describe("isLikelySpam", () => {
  it("flags a filled honeypot field", () => {
    const fd = formDataWith({
      [HONEYPOT_FIELD_NAME]: "https://spam.example",
      [TIMESTAMP_FIELD_NAME]: String(Date.now() - 5000),
    });
    expect(isLikelySpam(fd)).toBe(true);
  });

  it("flags a submission that arrives faster than a human could fill it", () => {
    const fd = formDataWith({
      [HONEYPOT_FIELD_NAME]: "",
      [TIMESTAMP_FIELD_NAME]: String(Date.now()),
    });
    expect(isLikelySpam(fd)).toBe(true);
  });

  it("passes a normal, human-timed submission", () => {
    const fd = formDataWith({
      [HONEYPOT_FIELD_NAME]: "",
      [TIMESTAMP_FIELD_NAME]: String(Date.now() - 5000),
    });
    expect(isLikelySpam(fd)).toBe(false);
  });

  it("passes when the timestamp field is missing entirely", () => {
    const fd = formDataWith({ [HONEYPOT_FIELD_NAME]: "" });
    expect(isLikelySpam(fd)).toBe(false);
  });
});
