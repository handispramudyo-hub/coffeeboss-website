# CoffeeBoss TMG — Agent Guide

**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Hook Form + Zod, Lucide React.

**Entrypoint:** `src/app/page.tsx` — composes all section components from `src/components/`.

## Commands

```bash
npm run dev      # dev server on localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # next lint
```

## Structure

```
src/
  app/
    layout.tsx       # root layout, metadata, global CSS import
    page.tsx         # landing page — orders all sections
    globals.css      # Tailwind v4 + custom theme (--color-gold, --color-primary, etc.)
  components/
    Navbar.tsx        # sticky glassmorphism nav, mobile hamburger
    Hero.tsx          # full-screen hero with CTA buttons
    About.tsx         # 4 highlight cards
    Products.tsx      # 3 product cards with image + tags
    Origin.tsx        # left copy + right image, 4 info cards
    Process.tsx       # 4-step numbered cards
    WhyUs.tsx         # 4 reason cards
    Gallery.tsx       # 6-image grid
    Contact.tsx       # contact channels + react-hook-form (Zod validated) → WhatsApp
    Footer.tsx        # 3-col footer
    WhatsAppButton.tsx # floating WA button on scroll
```

## Key facts

- **All images are Unsplash placeholders.** Replace with real photos in `public/images/`.
- **Contact form has no backend.** On submit, it builds a WhatsApp message URL and opens `wa.me/6281234567890` in a new tab.
- **Color palette** (custom Tailwind v4 theme in `globals.css`): `gold` (#C89B15), `primary` (#4A2C1D), `surface` (#121212), `text-muted` (#AFAFAF).
- **Language is Indonesian (`id`).** All copy in pages and components is in Bahasa Indonesia.
- **Image assets go in `public/images/`.** Reference as `/images/your-file.jpg`.
- **`"use client"`** in all components using hooks or browser APIs.
- **Tailwind v4 uses `@import "tailwindcss"`** in globals.css and `@theme` for custom values — not the v3 `@tailwind` directives or `tailwind.config.ts`.
