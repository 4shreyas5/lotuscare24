@AGENTS.md

# LotusCare24 — Permanent Project Rules

LotusCare24.com is a Dutch homecare/healthcare marketing website. These rules are permanent and apply to all work in this repo. Background and rationale live in `docs/`:

- `docs/PROJECT.md` — brand, market, audiences, reference model, absolute content rule
- `docs/DESIGN-SYSTEM.md` — color tokens, typography, spacing, motion, imagery
- `docs/INFORMATION-ARCHITECTURE.md` — sitemap, page contracts, homepage structure
- `docs/CONTENT-REQUIREMENTS.md` — outstanding facts/assets needed from the business

## 1. Language — non-negotiable

Every string a visitor can see or hear must be natural, professional Dutch: nav, headings, body copy, buttons, CTAs, form labels/placeholders/validation/success/error messages, loading states, empty states, FAQs, breadcrumbs, page titles, meta descriptions, OG text, cookie notices, alt text. No machine-translated Dutch, no English placeholder UI ("Learn More", "Submit", "Loading...", "Something went wrong").

Code stays in English: component names, variables, props, comments, commit messages.

## 2. Never fabricate LotusCare24 facts

No invented address, phone, email, KvK number, cities served, opening hours, certifications, quality marks, insurance/PGB arrangements, prices, statistics, headcount, years of experience, testimonials, employee identities, or partnerships. Where a fact is unknown, write `[CONTENT NODIG: <what's needed>]` directly in the copy/component and add it to `docs/CONTENT-REQUIREMENTS.md`. Never let a placeholder fact silently read as real in production copy.

## 3. Reference site is a functional model only

`thuisontzorgt.nl` informs information architecture and the kinds of things a Dutch homecare visitor needs to find. Never copy its logo, colors, typography, CSS, layouts, photography, or wording. LotusCare24's IA may resemble it in *category* (services, recruitment, contact) but every layout, composition, and sentence must be original.

## 4. Design principles

Betrouwbaar, warm, rustig, deskundig, persoonlijk — premium healthcare crossed with hospitality and editorial design. Generous whitespace, strong typographic hierarchy, warm neutral backgrounds, one restrained accent, subtle borders over heavy shadows. No generic medical blue, no medical-cross iconography, no glassmorphism/neon/heavy gradients, no floating-card SaaS-dashboard hero, no stock-photo clutter, no cliché lotus-flower icons. It should look expensive because of restraint, not effects.

## 5. Accessibility (WCAG AA minimum)

Semantic HTML and correct heading order, full keyboard navigation, visible focus states, labeled form fields, AA contrast, meaningful alt text, `prefers-reduced-motion` respected, touch targets ≥44px, body text no smaller than 16px. Older adults and family caregivers are primary users — legibility and clarity outrank density on every page.

## 6. Mobile is first-class

Design mobile compositions directly; don't just stack desktop sections. Pay specific attention to nav, CTA visibility, image cropping, form usability, and touch targets.

## 7. Performance

Use `next/image`, `next/font`, and Server Components by default. Keep client-side JavaScript minimal — mark `"use client"` only where interactivity requires it. No animation library unless a specific interaction genuinely needs it (see §8).

## 8. Dependency discipline

Before adding any package: (1) can an existing shadcn/`@base-ui/react` primitive do this, (2) can a small custom component do this, (3) does the dependency add real, non-cosmetic value. Only then install it. Do not add UI libraries for variety. Aceternity UI patterns and 21st.dev may be used as *reference/inspiration* for a specific, well-justified interaction — never installed wholesale, never as a demo showcase.

## 9. Coding standards

- Next.js 16 / App Router. This version has real breaking changes from training data — before touching routing, layouts, metadata, or params typing, check `node_modules/next/dist/docs/01-app/` (see `AGENTS.md`). Note `app/layout.tsx` already uses the generated `LayoutProps<"/">` / `PageProps<"/">` typed-route helpers — follow that pattern for new routes rather than hand-writing prop types.
- TypeScript strict mode is on — keep it passing.
- Follow the existing shadcn "base-nova" style already in the repo: components built on `@base-ui/react` primitives + `class-variance-authority` variants + the `cn()` helper from `lib/utils.ts`. Do not introduce Radix or a second primitives library.
- Reuse `components/ui/*` before writing new primitives. Compose page sections from shared building blocks (e.g. a `Section`/`Container` layout primitive) rather than repeating layout classes.
- Use Lucide icons (already installed) instead of hand-drawn SVGs when a suitable icon exists.
- Tailwind v4 CSS-variable theme lives in `app/globals.css` under `@theme inline` — extend tokens there, don't hardcode raw color values in components.

## 10. Workflow

Before changing code: inspect existing files and reuse what's there. After meaningful changes: run `npm run lint`, TypeScript checks, and a production build; fix errors before moving on. Do not leave broken code behind. Do not build ahead of what's been agreed — confirm sitemap/page scope before generating full page sets.
