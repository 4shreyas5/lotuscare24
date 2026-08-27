# Forms & production configuration

Covers the contact, kennismaken, and sollicitatie forms: architecture, required
environment variables, and what happens locally when they're unset.

## Architecture

Shared building blocks, used by all three forms:

- `lib/validation.ts` — field-level validators (required, email, phone, max length).
- `lib/forms/spam.ts` — honeypot field + minimum-fill-time check.
- `lib/forms/rate-limit.ts` — in-memory per-IP-per-form submission limiter.
- `lib/forms/email.ts` — Resend wrapper (`sendNotificationEmail`).
- `lib/forms/blob.ts` — cv file validation + private Vercel Blob storage.
- `lib/forms/state.ts` — shared `FormState` type and result builders.
- `components/forms/honeypot-field.tsx`, `form-success.tsx`, `form-error-banner.tsx`,
  `form-field.tsx`, `submit-button.tsx` — shared form UI.

Each form's own logic lives in `lib/actions/{contact,kennismaken,sollicitatie}.ts`
as a Server Action: validate → spam/rate-limit checks → (sollicitatie only:
validate + store cv) → send notification email → return a Dutch-language
`FormState`.

## Environment variables

Copy `.env.example` to `.env.local` (gitignored) and fill in real values.
`.env.local` is only for local development — set the same variables in your
hosting platform's dashboard (e.g. Vercel Project Settings → Environment
Variables) for staging/production.

| Variable | Purpose | If unset |
| --- | --- | --- |
| `RESEND_API_KEY` | Auth for the [Resend](https://resend.com) API. | No email is sent. The form still validates and accepts the submission — see "Local development" below. |
| `RESEND_FROM_EMAIL` | The sender address, e.g. `LotusCare24 <noreply@lotuscare24.nl>`. Must be on a domain verified in Resend. Not the same as `CONTACT_EMAIL` — this is a technical sender address, not the business's real inbox. | Same as above. |
| `CONTACT_EMAIL` | Where contact- and kennismaken-form notifications go. | Same as above. |
| `APPLICATION_EMAIL` | Where sollicitatie-form notifications go. | Same as above. |
| `BLOB_READ_WRITE_TOKEN` | Auth for [Vercel Blob](https://vercel.com/docs/vercel-blob), used to store uploaded cv files. Set automatically in Vercel deployments with a Blob store attached. | Uploaded cv files are not stored; the applicant's other details are still accepted and the internal email notes that the cv wasn't stored (see "Cv storage" below). |

None of these have real values anywhere in this repo — `CONTACT_EMAIL` /
`APPLICATION_EMAIL` in particular are not published anywhere yet (see
`docs/CONTENT-REQUIREMENTS.md`), so production values must come from the
business before launch.

## Local development

With no `.env.local` at all, every form still works end to end: validation,
spam/rate-limit checks, and the success/error UI all function normally. What
doesn't happen is the actual email send — `sendNotificationEmail` detects the
missing configuration, logs a `[forms] ...` warning server-side, and the
action still returns success (the visible success message never claims an
email was sent — it only confirms LotusCare24 received the submission). In
non-production (`NODE_ENV !== "production"`) only, a small dev-only note is
shown under the success message so this is obvious while testing locally —
see it happen: submit `/contact` with `RESEND_API_KEY` unset.

If Resend genuinely fails to send (bad key, API error) rather than simply
being unconfigured, the action returns a real error state instead — see
"Email failure vs. missing configuration" below.

## Spam protection

Two lightweight, JS-free-compatible signals, checked before anything else in
every action:

1. **Honeypot** — an invisible field (`components/forms/honeypot-field.tsx`)
   real visitors never see or reach (`aria-hidden`, `tabIndex={-1}`, not
   `display:none` so basic bots that skip CSS still fill it). Any value in it
   → treated as spam.
2. **Minimum fill time** — a hidden timestamp set when the form renders.
   Submissions within 1.5s of that are treated as spam (real users take
   longer to read and type). **Known trade-off:** a genuine user who submits
   within that window — aggressive browser autofill plus an immediate click
   is the realistic case — will see the normal success message without an
   email actually being sent, since a detected-spam submission is silently
   dropped rather than shown an error (showing an error would tell a bot
   which check it tripped). 1.5s was chosen as a conservative middle ground;
   if this turns out to cause real false positives in practice, the fix is
   to raise `MIN_FILL_TIME_MS` in `lib/forms/spam.ts`, not to remove the check.

Neither check is disclosed to the sender — a caught submission gets the exact
same success state as a real one.

If spam volume becomes a real problem despite this, the documented upgrade
path is a managed challenge (e.g. Cloudflare Turnstile) on the specific form
being abused, not a site-wide CAPTCHA.

## Rate limiting

`lib/forms/rate-limit.ts` caps each form to 5 submissions per 10 minutes per
client IP, in an in-memory map. This is a **best-effort** layer, not a
guarantee: a serverless deployment can run multiple instances, or recycle a
cold one, each with its own empty map — so a determined abuser spread across
enough requests can exceed the nominal limit. It still stops the common case
(a script hammering one warm instance) for zero cost or external dependency.

**For a real guarantee in production**, add one of:

- A shared store — [Upstash Redis](https://upstash.com) + `@upstash/ratelimit`
  — so the counter is consistent across all instances. Not installed here
  because it requires provisioning and paying for an external service this
  repo has no credentials for.
- Platform-level rate limiting — [Vercel Firewall](https://vercel.com/docs/vercel-firewall)
  rules — which works even before a request reaches this code, and is
  worth enabling regardless of the above.

## Cv storage

Uploaded cv files are validated by magic bytes (not filename or
browser-reported MIME type, both attacker-controlled) — see
`lib/forms/blob.ts`. Only real pdf, doc, or docx files under 5MB are
accepted; the check runs before anything is written to storage.

Accepted files are stored in [Vercel Blob](https://vercel.com/docs/vercel-blob)
with **`access: "private"`** — the resulting path is not a public,
fetchable URL; reading it back requires an authenticated server-side call
with `BLOB_READ_WRITE_TOKEN`. The stored filename is a random UUID, never
the applicant's name or their original filename, so nothing about the
storage path identifies the person.

**Known limitation — no retrieval tooling.** This repo has no authenticated
internal area to build a "view submitted cvs" page into, so nothing reads
these files back yet. Until one exists, retrieval is a manual operation via
the Vercel dashboard or API using the same token. Building a proper retrieval
flow (and deciding who's authorized to use it) is a production decision, not
something to invent here.

**Known limitation — no retention policy.** Vercel Blob does not
automatically expire objects. Deciding how long rejected/hired applicants'
cvs should be kept, and implementing that as a scheduled deletion job, is a
GDPR/AVG compliance decision for the business, not an engineering default —
see the corresponding entry in `docs/CONTENT-REQUIREMENTS.md`.

## Email failure vs. missing configuration

The two "email didn't go out" cases are handled differently on purpose:

- **Not configured** (no API key, no from-address, no recipient) — nothing
  was attempted, so nothing can have silently failed. The submission is
  still accepted (the business shouldn't lose a lead over infra not being
  wired up yet), logged server-side, and — non-production only — flagged
  with a dev note in the UI.
- **Send failed** (Resend was called and it errored — bad key, API outage,
  etc.) — this is a real failure of something that was attempted. The user
  gets a generic Dutch error message and is asked to retry or call, and the
  technical error is logged server-side only, never shown to the visitor.

## Testing

`npm test` runs the Vitest suite: `lib/validation.test.ts`,
`lib/forms/*.test.ts` (spam, rate-limit, blob, email), and
`lib/actions/*.test.ts` (the full three actions, with `next/headers`'s
`headers()` sidestepped by mocking `lib/forms/rate-limit` — its own unit
tests already cover the real limiter — and `lib/forms/email` /
`lib/forms/blob` mocked to assert call/no-call behavior without needing real
credentials).

Not covered by automated tests: an actual Resend delivery or Vercel Blob
upload against real credentials, and the browser-only behaviors (focus
order, screen reader announcement) — those were checked manually during this
pass; re-check by hand after any change to `honeypot-field.tsx`,
`form-field.tsx`, or the CV input markup.
