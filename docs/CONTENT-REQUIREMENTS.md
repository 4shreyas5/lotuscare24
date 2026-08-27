# LotusCare24 — Content Requirements

Everything below is currently unknown and must **not** be fabricated (`CLAUDE.md` §2). Each item should appear as `[CONTENT NODIG: ...]` in the relevant component/page until the business supplies it. This list is the tracking source of truth — update it as items are resolved.

## Legal & contact facts

- [ ] Legal entity name (if different from "LotusCare24")
- [ ] KvK number
- [ ] Registered address / visiting address
- [ ] Phone number
- [ ] Email address
- [ ] Opening hours / bereikbaarheid (incl. whether there's 24/7 contact for urgent care)
- [ ] Cities/regions served (werkgebied)
- [ ] Social media links (if any)

## Care & compliance

- [ ] Which services are actually offered today vs. planned (confirm the five `/zorg/*` categories match reality)
- [ ] Certifications / quality marks (e.g. HKZ, ISO) — only list what's actually held
- [ ] Zorgkaart Nederland or similar review-platform profile, if any
- [ ] Insurance/funding routes actually supported (ZVW, WLZ, PGB, particulier) and any conditions
- [ ] Klachtenregeling — actual complaints procedure text (Wkkgz-compliant; needs input from someone qualified to draft it, not generated copy)
- [ ] Privacyverklaring — actual AVG/GDPR-compliant privacy policy (needs legal input: what data is collected, retention, processor agreements, cookie/analytics tooling used)
- [ ] Any medical/regulatory claims must be reviewed by someone qualified before publishing — do not let AI-drafted copy imply clinical guarantees

## People & trust

- [ ] Founder/leadership profile, if the brand wants to feature one (reference site leads with this; LotusCare24 may choose to or not — needs a decision, not an assumption)
- [ ] Real testimonials/reviews with consent to publish (name/photo usage rights confirmed)
- [ ] Team photography — real staff, with consent, or clearly-sourced dignified stock in the interim (never implied to be actual LotusCare24 staff/clients — see `docs/DESIGN-SYSTEM.md`)
- [ ] Any stats worth stating (years active, team size, client numbers) — only if true and confirmed

## Recruitment

- [ ] Current openings/vacatures (or confirmation there's a standing "always open to hear from you" model instead)
- [ ] What the actual application process looks like (so `/werken-bij` copy is accurate, not invented)
- [ ] Any employer-branding facts (benefits, training, team culture specifics) — only real ones

## Brand & visual assets

- [ ] Final logo/wordmark — explicitly deferred per brief §8; current site uses a placeholder text wordmark only
- [ ] Confirmation/adjustment of the proposed color direction in `docs/DESIGN-SYSTEM.md` once seen rendered (color reads differently on screen than as oklch values on paper)
- [ ] Real photography (see imagery guidelines in `docs/DESIGN-SYSTEM.md`) — homes, caregivers, families, natural light; sourcing plan needed (commissioned shoot vs. licensed stock as interim)
- [ ] Favicon / OG share image once brand mark is finalized

## Analytics & operational

- [ ] Which analytics/consent-management tooling (if any) will be used — needed to write an accurate cookie notice rather than a generic one
- [x] Form backend/storage plan for contact, zorgvraag, and sollicitatie forms — implemented: Resend for notification email, Vercel Blob (private access) for cv storage. See `docs/FORMS.md`. What's still outstanding, tracked below.
- [ ] `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (a verified-domain sender address), `CONTACT_EMAIL`, `APPLICATION_EMAIL`, `BLOB_READ_WRITE_TOKEN` — real production values for the variables in `.env.example`. Forms work without them in development (see `docs/FORMS.md`) but need real values before launch.
- [ ] Cv retention policy — how long an applicant's cv should be kept, and by whom it may be accessed. Vercel Blob doesn't expire files automatically; a decision here is needed before implementing a deletion job. See `docs/FORMS.md` "Cv storage".
- [ ] Decision on stronger spam/rate-limiting infrastructure (Upstash Redis, Vercel Firewall, or a challenge like Turnstile) if the current honeypot + in-memory rate limit prove insufficient after launch — see `docs/FORMS.md`.
