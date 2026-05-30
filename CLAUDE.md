# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # ESLint via Next.js
```

No test suite is configured.

## Architecture

Next.js 14 (App Router) · React 18 · plain JavaScript (no TypeScript) · no Tailwind — all styling is custom CSS in `app/globals.css`.

Path alias `@/` maps to the project root (configured in `jsconfig.json`).

### Content

**`lib/data.js` is the single source of truth for all site content** — stats, pillars, modules, schedule, team, graduates, testimonials, benefits, evaluation criteria, steps, and contact info. Edit content here without touching components.

**Exception:** `HeroCarousel.js` has its image list (`IMAGES`) hardcoded inside the component, not in `data.js`.

### Components

`components/ui.js` exports every shared UI primitive as named exports:

| Export | What it does |
|--------|-------------|
| `useReveal()` | Hook — registers `IntersectionObserver` on `[data-reveal]` elements, adds `.in` class when visible |
| `Counter` | Animated numeric counter triggered on scroll, reads `value` prop (e.g. `"340+"`) |
| `MountainMark` | Brand SVG (two overlapping triangles in navy + burgundy) |
| `Logo` | Linked logo lockup |
| `PageHeader` | Reusable section header used at the top of inner pages |
| `CTASplit` | Reusable CTA block used at the bottom of most pages |

Other standalone client components:

| File | What it does |
|------|-------------|
| `Nav.js` | Responsive navbar with scroll-shadow effect and mobile overlay; `NAV` array is defined here (and duplicated in `Footer.js`) |
| `Footer.js` | Footer with brand copy, nav links, and contact info pulled from `data.contact` |
| `HeroCarousel.js` | Auto-advancing image carousel with progress bar, arrow nav, and dot indicators; pauses on hover |
| `TeamCarousel.js` | Auto-advancing team member carousel pulling from `data.team`; pauses on hover |
| `CopyEmail.js` | Button that copies an email to clipboard and shows a transient "¡Copiado!" confirmation |

### Scroll animations

Reveal animations work via CSS + the `useReveal()` hook:
- Add `data-reveal` to any element to opt in.
- Stagger delay: `style={{ "--d": "60ms" }}` (CSS picks this up via `transition-delay: var(--d, 0ms)`).
- The hook is called once per page — typically inside `PageHeader` or at the top of a client component.

### Hero variant

`app/page.js` exports `HERO_VARIANT = "A"` at the top. Switch to `"B"` for the alternative typographic hero with mountains.

### Server vs. client split

- `"use client"`: `app/page.js` (stats, Counter), `app/convocatoria/page.js` (expandable schedule), `app/postulacion/page.js` (form with validation), `app/graduados/page.js` (reveal animations)
- Server Components: `app/programa/page.js`, `app/equipo/page.js`, `app/contacto/page.js`

### Design system

All brand tokens are CSS custom properties declared in `app/globals.css`:

- **Colors:** `--burgundy`, `--navy`, `--accent`, `--cream`, `--ink`, `--tx`, `--tx-2`, `--tx-3`
- **Layout:** `--maxw` (1240px), `--pad` (fluid via `clamp`), `--r`, `--r-lg`
- **Typography:** `--sans` (Archivo), `--serif` (Newsreader) — loaded via `next/font/google` in `app/layout.js`

Use `className="wrap"` for max-width-constrained, padded containers. Use `className="section"` for vertical rhythm sections. Use `className="mono"` for monospaced text (e.g., numbered labels, legal copy).

### Placeholder images

Blocks with class `.ph` are image placeholders. Replace with `<Image>` from `next/image` when real photos are available. Team portraits go in `public/integrantes/`; hero/carousel images go in `public/images/`.

## Open TODOs (from README)

- Connect the postulación form to a backend, email service, or Google Form (currently client-only with confirmation UI).
- Replace placeholder stats (`340+`, `48`, `120`, `18` in `data.stats`) with real figures.
- Replace `.ph` placeholders and `HeroCarousel` dummy images with real photos.
