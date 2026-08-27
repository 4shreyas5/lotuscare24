import { describe, expect, it } from "vitest";

import { isRateLimited } from "@/lib/forms/rate-limit";

// Each test uses its own key since the limiter's bucket map is a
// module-level singleton shared across the whole test file.
function uniqueKey(label: string): string {
  return `${label}:${Math.random().toString(36).slice(2)}`;
}

describe("isRateLimited", () => {
  it("allows submissions up to the limit", () => {
    const key = uniqueKey("within-limit");
    for (let i = 0; i < 5; i++) {
      expect(isRateLimited(key)).toBe(false);
    }
  });

  it("blocks the submission after the limit is reached", () => {
    const key = uniqueKey("over-limit");
    for (let i = 0; i < 5; i++) isRateLimited(key);
    expect(isRateLimited(key)).toBe(true);
  });

  it("tracks separate keys independently", () => {
    const keyA = uniqueKey("a");
    const keyB = uniqueKey("b");
    for (let i = 0; i < 5; i++) isRateLimited(keyA);
    expect(isRateLimited(keyA)).toBe(true);
    expect(isRateLimited(keyB)).toBe(false);
  });
});
