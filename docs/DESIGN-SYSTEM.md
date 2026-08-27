# LotusCare24 — Design System (v0, initial direction)

Status: initial direction for implementation, not yet validated in-browser. Colors are given in the same `oklch()` format already used in `app/globals.css` so they can be dropped straight into the `:root` / `.dark` blocks; expect to fine-tune lightness/chroma once rendered against real photography. Logo/wordmark is explicitly a placeholder per brief §8 — do not finalize.

## Design intent

Premium healthcare × hospitality × editorial. Warm neutral ground (not clinical white, not cold gray), one deep muted green as the brand anchor (calm, natural, *not* medical blue), one warm clay/terracotta accent used sparingly for calls to action. Restraint over effects: subtle borders, soft shadows only where they earn their place, no glassmorphism/gradients/neon.

## Color tokens

Mapped 1:1 to the CSS variables already declared in `app/globals.css` (`--background`, `--primary`, etc.) so adopting them is a value swap, not a restructure.

### Light (default)

| Token | Value | Purpose |
|---|---|---|
| `--background` | `oklch(0.98 0.008 85)` | warm ivory/sand page ground |
| `--foreground` | `oklch(0.24 0.015 55)` | warm charcoal text, not pure black |
| `--card` | `oklch(0.995 0.006 85)` | slightly lifted warm white |
| `--card-foreground` | `oklch(0.24 0.015 55)` | |
| `--popover` / `--popover-foreground` | same as card | |
| `--primary` | `oklch(0.32 0.045 165)` | deep muted "lotus pond" green — brand anchor, nav/links/primary buttons |
| `--primary-foreground` | `oklch(0.98 0.006 85)` | |
| `--secondary` | `oklch(0.93 0.02 75)` | warm sand surface for secondary buttons/panels |
| `--secondary-foreground` | `oklch(0.28 0.02 60)` | |
| `--muted` | `oklch(0.95 0.012 80)` | subtle section backgrounds |
| `--muted-foreground` | `oklch(0.48 0.02 60)` | secondary text |
| `--accent` | `oklch(0.62 0.12 45)` | warm clay/terracotta — sparing use: key CTAs, highlights only |
| `--accent-foreground` | `oklch(0.99 0.005 85)` | |
| `--destructive` | `oklch(0.577 0.215 27)` | form/validation errors |
| `--border` / `--input` | `oklch(0.88 0.015 75)` | |
| `--ring` | `oklch(0.32 0.045 165 / 0.5)` | focus ring, ties to primary |

### Dark

| Token | Value |
|---|---|
| `--background` | `oklch(0.19 0.012 55)` |
| `--foreground` | `oklch(0.96 0.008 85)` |
| `--card` | `oklch(0.23 0.014 55)` |
| `--primary` | `oklch(0.72 0.09 165)` |
| `--primary-foreground` | `oklch(0.19 0.012 55)` |
| `--secondary` | `oklch(0.28 0.016 60)` |
| `--muted` | `oklch(0.26 0.014 60)` |
| `--muted-foreground` | `oklch(0.68 0.015 75)` |
| `--accent` | `oklch(0.68 0.12 45)` |
| `--accent-foreground` | `oklch(0.19 0.012 55)` |
| `--destructive` | `oklch(0.704 0.191 22)` |
| `--border` / `--input` | `oklch(1 0 0 / 12%)` |
| `--ring` | `oklch(0.72 0.09 165 / 0.5)` |

Dark mode is secondary priority for a marketing site aimed partly at older users — implement it correctly, but the light warm palette is the design's true home.

**Usage rule:** `--primary` (green) carries brand identity and most interactive elements. `--accent` (clay) is reserved for the one or two things per page that must not be missed — the primary CTA, a key stat, an active state. If everything is accented, nothing is.

## Typography

- **Body / UI / nav / buttons:** Geist Sans (already wired via `next/font/google`). Clean, highly legible, keeps the interface feeling modern and unfussy for older readers.
- **Display / headings (H1–H2, pull quotes):** add one warm editorial serif via `next/font/google` — recommend **Newsreader** (optical-size variable serif, reads as trustworthy/institutional rather than trendy-startup, legible at large sizes for older users). **Source Serif 4** is the fallback candidate if Newsreader's texture doesn't suit once seen against real photography. Avoid highly stylized display serifs (e.g. Instrument Serif) — too fashion-editorial for a healthcare audience that includes visually-impaired older readers.
- Register as `--font-heading` in the existing `@theme inline` block (already stubbed to `var(--font-sans)` in `globals.css:12` — point it at the new serif variable instead).
- Scale (mobile → desktop, Tailwind text tokens): Display `text-4xl → text-6xl` (serif), H2 `text-2xl → text-4xl` (serif), H3 `text-xl → text-2xl` (sans, medium weight), body `text-base → text-lg` (sans, 16–18px minimum per accessibility rule), small/caption `text-sm`.
- Line length: cap prose at `max-w-prose`/`max-w-2xl`. Line height generous (`leading-relaxed`/`leading-8`) for body copy given the older-reader audience.

## Spacing & layout

- **Container:** `max-w-7xl` outer, content-heavy text blocks constrained further to `max-w-3xl`/`max-w-prose`.
- **Page margin:** `px-6` mobile, `px-8` tablet, `px-12`/`px-16` desktop.
- **Section rhythm:** `py-16` mobile, `py-24` tablet, `py-28`–`py-32` desktop between major homepage sections — generous whitespace is a stated design requirement, not optional polish.
- **Component spacing:** Tailwind's default scale (4px base unit); no custom spacing scale needed.
- Build a shared `Section` and `Container` layout primitive early (see roadmap) so this rhythm is enforced structurally instead of copy-pasted per page.

## Components

- Build on what's installed (`button`, `card`, `badge`, `accordion`, `dialog`, `sheet`, `input`, `textarea`, `separator`) before adding registry components.
- Anticipated additions during implementation (pull via the shadcn MCP server already configured, add only when the page that needs them is being built): `navigation-menu` or a custom header nav, `label`, `select`, `checkbox`/`radio-group` (required for a GDPR consent checkbox on any form), `tooltip`.
- **Cards:** subtle border (`border-border`) + minimal shadow, radius following the existing `--radius` scale in `globals.css` — do not increase roundedness beyond what's already tokenized.
- **Buttons:** existing `buttonVariants` (`default`/`outline`/`secondary`/`ghost`/`destructive`/`link`) are sufficient; primary CTA = `default` variant recolored via the `--primary`/`--accent` tokens above, no new variant needed.
- **Service cards, CTA blocks, step/journey indicators:** new custom components composed from `Card` + Lucide icons + typography tokens — no new dependency required.

## Motion

- Durations: micro/hover `150–200ms`, entrance (fade + small translate-y on scroll into view) `300–500ms`.
- Easing: `ease-out` for entrances, standard `ease-in-out` for hover/toggle state changes.
- No parallax, no 3D transforms, no auto-playing carousels.
- Respect `prefers-reduced-motion` throughout — `tw-animate-css` (already installed) plus Tailwind's `motion-safe:`/`motion-reduce:` variants are sufficient; no new animation library needed unless a specific, well-justified interaction requires it (`CLAUDE.md` §8).

## Imagery

- Real, warm, dignified photography: people in real homes, natural light, genuine interaction — not stock hospital/clinical imagery, not generic AI-generated illustration.
- Until real LotusCare24 photography exists, use clearly-labeled placeholder imagery (e.g. a muted duotone/placeholder block with a visible "Beeldmateriaal volgt" marker in dev, never a real stock photo implied to be actual staff/clients) — track sourcing in `docs/CONTENT-REQUIREMENTS.md`.
- Serve via `next/image` throughout for optimization.

## Iconography

- Lucide only. No custom lotus-flower iconography or medical-cross symbols. If the brand mark needs a subtle lotus reference, that is a logo-design decision explicitly deferred per brief §8, not something to improvise into UI icons.
