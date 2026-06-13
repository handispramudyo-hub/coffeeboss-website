# CoffeeBoss TMG — Agent Guide

**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form + Zod, Lucide React.

**Entrypoint:** `src/app/page.tsx` — composes all section components from `src/components/`.

## Commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build  → static export (out/)
npm start        # serve production build
npm run lint     # next lint
```

## Key facts

- **Static export.** `next.config.ts` sets `output: "export"` → deploy from `out/`. Netlify config at `netlify.toml` (build: `npm run build`, publish: `out`). No server runtime.
- **`@/` alias** maps to `src/` (tsconfig.json `paths`).
- **Tailwind v4** via `@import "tailwindcss"` + `@theme` block in `globals.css`. No `tailwind.config.ts`. Utility classes defined in `globals.css`: `.btn-primary`, `.btn-outline`, `.section-heading`, `.section-subtitle`, `.glass`, `.img-placeholder`, `.gold-accent`, `.card`, `.tag`.
- **Color palette** (`globals.css` `@theme`): `primary` (#4A2C1D), `primary-light` (#6B4226), `primary-dark` (#2D1A0F), `gold` (#C89B15), `gold-light` (#E0B832), `gold-dark` (#A07E0F), `surface` (#121212), `surface-light` (#1E1E1E), `surface-lighter` (#2A2A2A), `text` (#FFFFFF), `text-muted` (#AFAFAF), `text-dark` (#0D0D0D).
- **Copy is bilingual** — headings / product descriptions are in English, some body / section text is in Indonesian (`id`).
- **`"use client"`** in every component (all use framer-motion or browser APIs). Footer too (for scroll-smooth click handler).
- **All components use `motion.div`** with consistent `initial/whileInView/viewport/transition` pattern for scroll-triggered animations.

## Components

| File | What it does |
|------|-------------|
| `Hero.tsx` | Full-screen hero with background video (`/images/vid1.mp4`), 2 CTA buttons (scroll-to-section) |
| `About.tsx` | 4 highlight cards (Local Sourcing, Quality Selection, Flexible Supply, Responsive Communication) |
| `Products.tsx` | **4** product cards (Robusta Grade I, Robusta Grade II, Specialty Arabica, Robusta Cherry Red Pick) — brief desc visible, full details + tags expand on "Request Details" click |
| `Origin.tsx` | Left copy + right image (`/images/tmg.jpeg`), 4 info cards (ketinggian, suhu, tanah, lokasi) |
| `Process.tsx` | 4-step numbered cards (Selective Harvesting → Processing → Sorting → Packaging) |
| `WhyUs.tsx` | 4 reason cards (Direct Farm Sourcing, Transparent Communication, Flexible Partnership, Long-Term Focus) |
| `Gallery.tsx` | **2 videos** only (`/images/vid2.mp4`, `/images/vid3.mp4`) — not images |
| `Contact.tsx` | Contact channels (WA, IG, Email, Google Maps) + react-hook-form (Zod validated) → opens WhatsApp URL |
| `Footer.tsx` | 3-col footer (brand, quick links, info with packaging specs / MOQ / WA / email / address) |
| `WhatsAppButton.tsx` | Floating WA button (appears on scroll > 500px) |
| `Navbar.tsx` | Sticky glassmorphism nav, mobile hamburger, smooth-scroll nav links |

## Contact form

- **No backend.** On submit, it builds a WhatsApp message URL and opens `wa.me/6281338256185` in a new tab.
- Form fields: name, email, company (optional), country, product (dropdown), estimate (optional), message.

## Images & assets

- **`public/images/`** contains actual brand assets (logos, profile photo, product photos, videos) — not Unsplash placeholders.
- Reference as `/images/your-file.jpg` or `/images/your-file.mp4`.
- `next.config.ts` has `images: { unoptimized: true }` (required for static export).
