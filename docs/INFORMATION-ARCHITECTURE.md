# Lotus Vitaal — Information Architecture

This is the final recommended sitemap for v1, not the brief's starting hypothesis. It keeps the brief's category coverage but merges several thin topics into richer parent pages, and splits out `Voor mantelzorgers` as its own top-level item because the brief and reference model both treat family caregivers as a distinct, decision-making audience, not a subsection of "how it works."

## Sitemap

```
/ (Home)
/zorg                              Zorg — overview/hub
  /zorg/thuiszorg-en-verzorging     Thuiszorg & persoonlijke verzorging (merged — see rationale)
  /zorg/verpleging                  Verpleging
  /zorg/begeleiding                 Begeleiding
  /zorg/24-uurszorg                 24-uurszorg (incl. nachtzorg as a section, not a page)
  /zorg/palliatieve-zorg            Palliatieve zorg
/hoe-het-werkt                      Hoe het werkt (journey + zorgplanning/coördinatie combined)
/voor-mantelzorgers                 Voor mantelzorgers
/over-ons                           Over ons (visie/werkwijze + kwaliteit & vertrouwen combined)
/werken-bij                         Werken bij (incl. vacatures + solliciteren as sections)
/samenwerken                        Samenwerken (voor verwijzers, zorgprofessionals & partners)
/contact                            Contact (incl. "kennismaken/gesprek aanvragen" as the main form)
/veelgestelde-vragen                FAQ
/privacy                            Privacyverklaring
/klachten                           Klachtenregeling
```

### Merge/split rationale

- **Thuiszorg + Persoonlijke verzorging → one page.** These overlap heavily in practice (help in the home with daily care) and the brief itself cautions against thin pages. Split them out only once real content depth (e.g. distinct regulatory/funding info) justifies it.
- **Nachtzorg → a section within 24-uurszorg**, not its own page. It's a variant of continuous care, not a separate service decision for a visitor.
- **Zorgplanning/zorgcoördinatie → folded into "Hoe het werkt"** rather than a separate page under "Hoe wij helpen" — it's part of explaining the process, and a standalone page would likely repeat the journey content.
- **Over ons + Visie/werkwijze + Kwaliteit en vertrouwen → one page with anchored sections.** Splitting into three thin pages forces a visitor into unnecessary clicks before any of the three has enough real content (most of it currently `[CONTENT NODIG]`). Revisit splitting once each section has enough substance to stand alone.
- **Werken bij + Vacatures + Solliciteren → one page for v1.** A real vacancies listing implies an ATS/CMS integration that doesn't exist yet (see `docs/CONTENT-REQUIREMENTS.md`); until then, one page describing working at Lotus Vitaal with a contact-to-apply path is more honest than an empty "vacatures" page.
- **Voor zorgprofessionals + Ketenpartners → one "Samenwerken" page**, sectioned by audience (referrers/huisartsen vs. samenwerkingspartners), since both are tertiary-audience, relationship-oriented content.
- **Klachten kept as its own legal page**, not folded into privacy — Dutch care providers are required (Wkkgz) to have a findable, explicit complaints procedure; burying it hurts both compliance and trust.
- **FAQ as both a standalone page and contextual snippets** on relevant service pages (not full duplication — link back to the canonical FAQ entry).

## Navigation

- **Header (primary nav):** Zorg · Hoe het werkt · Voor mantelzorgers · Over ons · Werken bij · Contact. "Samenwerken" and "Veelgestelde vragen" live in a secondary nav or footer to keep the primary header short and scannable for older users — promote "Samenwerken" to the header only if partner/referrer traffic proves significant.
- **Header CTA:** persistent, single primary action — "Neem contact op" or "Plan een kennismaking" (final Dutch wording TBD in copy pass) linking to `/contact`. On mobile, keep this reachable without opening the menu (e.g. a sticky call/contact action), since a family member searching on a phone shouldn't have to hunt for it.
- **Footer:** sitemap recap, contact block (`[CONTENT NODIG]` until real details exist), `/privacy`, `/klachten`, social links (`[CONTENT NODIG]`), and — once available — certification/quality-mark logos.

## Homepage structure

Answers the brief's eight homepage questions (§13) without mechanically implementing every listed section (§14) as its own block. Recommended flow, to be refined once real copy and imagery exist:

1. **Header** — sticky nav as above.
2. **Hero** — one clear sentence on what Lotus Vitaal is and for whom, one primary CTA, one supporting image. No stat cards, no dashboard UI (`CLAUDE.md` §4).
3. **Oriëntatie** — a short two-path split ("zorg voor uzelf of een naaste" vs. "ik ben zorgprofessional / verwijzer") so different audiences self-select immediately instead of scrolling through irrelevant content — a hospitality-site pattern, not a reference-site pattern.
4. **Introductie** — short, warm paragraph on who Lotus Vitaal is; factual claims marked `[CONTENT NODIG]` until confirmed.
5. **Zorgaanbod** — card grid linking to the five `/zorg/*` pages.
6. **Hoe het werkt** — the care journey as a clear, numbered sequence (see below), linking to `/hoe-het-werkt`.
7. **Persoonlijke aanpak** — continuity of care / vaste kleine teams framing.
8. **Voor mantelzorgers** — dedicated reassurance block, linking to `/voor-mantelzorgers`.
9. **Kwaliteit & vertrouwen** — trust markers; render as `[CONTENT NODIG]` placeholders, not fabricated badges, until real certifications are confirmed.
10. **Testimonials — omitted for v1.** Do not fabricate quotes or client identities (`CLAUDE.md` §2). Reintroduce only when real, consented testimonials exist.
11. **FAQ preview** — three to four top questions, linking to `/veelgestelde-vragen`.
12. **Werken bij teaser** — one small block so the recruitment audience isn't stranded, without competing with the primary care-seeker flow.
13. **Slotoproep (final CTA)** — strong, unambiguous contact/consultation prompt.
14. **Footer.**

Treat this as a working structure, not a spec to implement literally — merge adjacent sections (e.g. 3 into 2, 12 into the footer CTA area) if the built page reads as too long or repetitive.

## Care journey (original wording, not the reference's)

A five-step framing used on the homepage and expanded on `/hoe-het-werkt`:

1. **Kennismaken** — eerste contact en gesprek.
2. **Zorgbehoefte in kaart brengen** — wat is er nodig, thuis, samen bekeken.
3. **Persoonlijk zorgplan** — afspraken op maat.
4. **Passende zorg** — een vast, klein team dat het uitvoert.
5. **Blijvende betrokkenheid** — regelmatig contact en bijstelling waar nodig.

Exact Dutch copy is a content-writing task, not a placeholder to freeze here — this is the structural skeleton.

## Page contract (applies to every `/zorg/*` page)

Per brief §17, each service page should answer, in order: wat is het, voor wie, wat doet Lotus Vitaal, hoe voelt het (de ervaring), en wat is de volgende stap (CTA naar contact/intake). Build one shared service-page template/component rather than five bespoke layouts.

## Forms inventory

- **Contact / kennismaking** (`/contact`) — name, contact details, short message, relationship to care-seeker (self/family/professional), GDPR consent checkbox.
- **Zorgvraag** (could live on `/contact` as a variant, or a dedicated step — decide during forms implementation) — light triage (which kind of care, for whom, urgency) without collecting sensitive health data client-side (`CLAUDE.md` / brief §18).
- **Sollicitatie** (`/werken-bij`) — name, contact details, role interest, message/CV upload placeholder.

All three: accessible labels, inline Dutch validation messages, clearly marked as needing real backend/storage before going live with any sensitive data.
