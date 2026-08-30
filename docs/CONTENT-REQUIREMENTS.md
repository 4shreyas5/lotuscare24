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

- [ ] Final logo/wordmark — see "Lotus flower brand mark" below; current site uses a placeholder text wordmark only
- [ ] Confirmation/adjustment of the proposed color direction in `docs/DESIGN-SYSTEM.md` once seen rendered (color reads differently on screen than as oklch values on paper)
- [ ] Favicon / OG share image once brand mark is finalized

### Real photography — client-supplied

`public/images/client/` now holds actual files. The client (or whoever last touched this folder) renamed all five files since the previous inventory — the names below are current as of this writing. **The rename swapped the identity of two files relative to their names**: the file now called `verpleging.jpg` is the outdoor hand-holding photo previously named `adult-anniversary-care-...kopie (2).jpg` (flagged below for suspected competitor provenance), and the file now called `mantelzorg.jpg` is actually the confirmed nurse photo previously named `nurse-take-care-of-senior-woman-thuisontzorgt.jpg`. This was confirmed by exact byte size, pixel dimensions, and visual inspection, then explicitly confirmed with the business owner, who chose to proceed with the files exactly as currently named rather than swap them back. `lib/images.ts` alt text has been corrected to describe what each file actually shows.

| File (current name) | Subject / quality | Outcome |
| --- | --- | --- |
| `verpleging.jpg` (1024×716 — formerly `adult-anniversary-care-...kopie (2).jpg`) | Outdoor, candid hand-holding moment between an older woman and someone off-camera — no clinical/nursing context | **Used as `images.verpleging`**, live on `/zorg/verpleging` (hero + closing CTA bookend). Filename ended in "thuisontzorgt - kopie (2)" before the rename — Dutch for "copy (2)" — suggesting the original file was saved directly from thuisontzorgt.nl. `CLAUDE.md` §3 forbids using that site's photography; raised with the business, who confirmed proceeding with this file as-is. |
| `mantelzorg.jpg` (6192×4128, full-res, proper stock-photo EXIF/caption metadata — formerly `nurse-take-care-of-senior-woman-thuisontzorgt.jpg`) | Caregiver with visible id badge, hand on an elderly woman's shoulder, indoor home setting — this is the confirmed nursing photo, not a "mantelzorg" (informal family care) scene | **Used** as `images.mantelzorg`/`images.ouderStelBankje`, only as a very low-opacity atmospheric background on `/hoe-wij-helpen/mantelzorg`'s pull-quote section (`BackgroundImage` renders `alt=""`, so the mismatch between filename and content is invisible to visitors, but the full-res nursing photo is being spent on a barely-visible background rather than a foreground service image) |
| `gebouw.jpeg` (500×333 — formerly `Unknown.jpeg`) | Elderly couple on a park bench, seen from behind | **Not used** under its current name/key — this is the photo the mantelzorg page was originally designed around; it's not wired into `lib/images.ts` post-rename |
| `foto-extra.jpg` (800×532 — formerly `yj1vjiqnyp2sxqkua2ry.jpg`) | An apartment/residential building exterior — no people | **Not used.** No confirmation this is an actual LotusCare24 location; purpose still unclear |
| `logo-lotus.png` (940×940 PNG — formerly `Lotus_logo_exact.png`) | Gold lotus icon + the word "LOTUS" (not "LotusCare24"), on an opaque magenta background with an ornate decorative corner frame | **Not implemented** — see "Lotus flower brand mark" below |

**Still missing** (no file yet, for any of these):
- Homepage hero replacement (client asked for something calmer than "people looking at each other" — none of the delivered photos fit; homepage now uses `images.keukenWarmte`, a stock photo, to free `images.heroThuiszorg` for its own unique use on `/zorg/thuiszorg`)
- `/kennismaken` replacement — needs a photo that reads as a professional intake conversation, not "twee vriendinnen aan de thee." `/kennismaken` now shows `images.gesprekAanTafel` instead of the rejected photo — a stock placeholder, not yet a delivered client photo
- `/zorg/persoonlijke-verzorging`, `/zorg/begeleiding`, `/zorg/24-uurszorg`, `/zorg/palliatieve-zorg` — six services were originally captioned by the client in WhatsApp screenshots, but this delivery only contained the verpleging photo (plus the two above that weren't used) — the other five captioned photos still need to arrive as files
- A "huishoudelijke hulp" photo — none of the delivered files clearly depicts household/domestic help specifically. Huishoudelijke hulp requires business confirmation before becoming a real LotusCare24 service anyway; it's currently just named within `/zorg/thuiszorg`'s copy, not a route

### Lotus flower brand mark

`logo-lotus.png` was inspected but **not implemented** into the header,
footer, or wordmark. As delivered it: (1) reads "LOTUS", not "LotusCare24";
(2) has an opaque magenta background and an ornate gold decorative frame,
not an isolated transparent icon; (3) its ornate, gilded, framed style
directly conflicts with this project's own permanent design rule
(`CLAUDE.md` §4: "no ... cliché lotus-flower icons," restraint over
decoration). Per the brief's own instruction, it was not redrawn/simplified
either — a brand mark is a highly visible, hard-to-reverse decision that
needs either a proper isolated asset (transparent background, no frame, no
"LOTUS" text) or an explicit decision to override the existing restrained
design direction, not a unilateral edit.

## Analytics & operational

- [ ] Which analytics/consent-management tooling (if any) will be used — needed to write an accurate cookie notice rather than a generic one
- [x] Form backend/storage plan for contact, zorgvraag, and sollicitatie forms — implemented: Resend for notification email, Vercel Blob (private access) for cv storage. See `docs/FORMS.md`. What's still outstanding, tracked below.
- [ ] `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (a verified-domain sender address), `CONTACT_EMAIL`, `APPLICATION_EMAIL`, `BLOB_READ_WRITE_TOKEN` — real production values for the variables in `.env.example`. Forms work without them in development (see `docs/FORMS.md`) but need real values before launch.
- [ ] Cv retention policy — how long an applicant's cv should be kept, and by whom it may be accessed. Vercel Blob doesn't expire files automatically; a decision here is needed before implementing a deletion job. See `docs/FORMS.md` "Cv storage".
- [ ] Decision on stronger spam/rate-limiting infrastructure (Upstash Redis, Vercel Firewall, or a challenge like Turnstile) if the current honeypot + in-memory rate limit prove insufficient after launch — see `docs/FORMS.md`.
