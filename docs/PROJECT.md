# Lotus Vitaal — Project Brief

## Brand

- **Name:** Lotus Vitaal
- **Domain:** lotusvitaal.com
- **Industry:** Thuiszorg / homecare (Netherlands)
- **Primary market & language:** Netherlands, Dutch. All user-facing content is Dutch — see `CLAUDE.md` §1.
- **Legal/business facts:** unknown at this stage. See `docs/CONTENT-REQUIREMENTS.md` before publishing any page that implies a fact (address, KvK, certifications, etc.).

## What "good" looks like

The brief (and this document) target a feeling, not a template:

> "Hier staat de mens centraal."

Premium healthcare × modern hospitality × editorial design. Betrouwbaar, menselijk, warm, rustig, professioneel, modern, premium, toegankelijk, deskundig, persoonlijk. See `docs/DESIGN-SYSTEM.md` for how that translates to tokens and components, and `CLAUDE.md` §4 for what to avoid.

## Reference model — thuisontzorgt.nl

Fetched and reviewed for structure only (2026-08-27). Observed model:

- **Primary nav:** Home / 24-uurs (24-uurs & palliatieve zorg) / Ontzorgcoach / Werken bij / Ketenpartners / Over ons.
- **Services:** verpleging, verzorging (personal care), begeleiding, 24-uurszorg, palliatieve zorg, plus administrative support (indicaties, verzekeringen, woningaanpassingen) and financing routes (ZVW, WLZ, PGB/particulier).
- **Homepage pattern:** contact info up front → founder profile & philosophy → staff testimonial → "about/how we work" → CTA → contact/intake form → certifications → reviews (Google/Zorgkaart) → footer with legal documents.
- **Audience split:** care recipients/families get intake + service info + testimonials; care professionals get a dedicated recruitment section; referrers/partners get a "ketenpartners" section.
- **Intake model:** consultation call → intake conversation (needs assessment) → feasibility check (financing/insurance) → provider matching.

**Explicitly not reused:** its logo, colors, typography, CSS, layout compositions, photography, or any copy. Only the *category* of information a Dutch homecare visitor expects is treated as a reference. Lotus Vitaal's actual sitemap (`docs/INFORMATION-ARCHITECTURE.md`) restructures and renames this model based on our own usability judgment — several thin reference pages (e.g. separate nachtzorg, separate vacatures listing) are merged into richer parent pages until real content justifies splitting them out.

## Audiences

1. **Primary:** mensen die thuiszorg nodig hebben — ouderen, mensen met langdurige zorgbehoeften, mensen die 24-uurszorg nodig hebben, mensen in een palliatieve fase.
2. **Secondary:** familieleden, partners, kinderen van ouderen, mantelzorgers — often the actual visitor and decision-maker, even when care is for someone else.
3. **Tertiary:** huisartsen, verpleegkundigen, zorgprofessionals, verwijzers, samenwerkingspartners, potentiële medewerkers.

Design and copy must stay legible and unambiguous for older users and non-technical family members first; professional/recruitment audiences are served by dedicated sections rather than by complicating the primary flow.

## Absolute content rule

Never invent: address, phone, email, cities served, opening hours, KvK number, certifications/ISO/quality marks, insurance or PGB arrangements, prices, statistics, employee counts, years of experience, client numbers, testimonials, employee identities, partnerships, medical claims, or regulatory claims.

Where unknown, write `[CONTENT NODIG: ...]` inline rather than a plausible-sounding placeholder number or name. Track every open item in `docs/CONTENT-REQUIREMENTS.md`.

## Current technical foundation (as of 2026-08-27)

Audited directly — see also `AGENTS.md` (Next.js's own generated agent notes) and `CLAUDE.md`.

- **Framework:** Next.js 16.3.3, App Router, React 19.2.8, TypeScript strict.
- **Styling:** Tailwind CSS v4 (`@theme inline` token layer in `app/globals.css`), `tw-animate-css`.
- **Components:** shadcn/ui, `style: base-nova`, `baseColor: neutral`, built on `@base-ui/react` (not Radix) + `class-variance-authority`. Installed so far: `accordion`, `badge`, `button`, `card`, `dialog`, `input`, `separator`, `sheet`, `textarea` — all unused, default scaffold only.
- **Icons:** `lucide-react`.
- **Fonts:** Geist Sans / Geist Mono via `next/font/google`, wired but not yet extended with a display face.
- **State:** `app/page.tsx` and `app/layout.tsx` are still the unmodified `create-next-app` scaffold. No custom pages, sections, or content exist yet. One git commit ("Initialize Lotus Vitaal website foundation") with a clean working tree.
- **MCP:** a `shadcn` MCP server is configured (`.mcp.json`) for pulling registry components.

This is a blank slate: the design system and IA below are the first real product decisions for this repo.
