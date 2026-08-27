import { headers } from "next/headers";

type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

/**
 * In-memory, per-server-instance rate limiting. This is a best-effort layer,
 * not a guarantee: a serverless deployment can spin up multiple instances
 * (each with its own empty map) or recycle a cold instance at any time,
 * silently resetting a client's count. It still stops the common case (a
 * script hammering one warm instance) and costs nothing to run.
 *
 * For a real production guarantee, add a shared store (e.g. Upstash Redis
 * with @upstash/ratelimit) or enable rate limiting at the platform edge
 * (Vercel Firewall). Not wired up here because both require provisioning an
 * external service this repo doesn't have credentials for — see
 * docs/FORMS.md.
 */
const buckets = new Map<string, Bucket>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_SUBMISSIONS_PER_WINDOW;
}

/** Keys the limiter per form per client, so heavy use of one form doesn't
 * lock a visitor out of another. Falls back to a shared "unknown" bucket
 * when no client IP is available (e.g. local dev), which is intentionally
 * coarse — see docs/FORMS.md. */
export async function getRateLimitKey(formName: string): Promise<string> {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";
  return `${formName}:${ip}`;
}
