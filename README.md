# Wandr

A landing-page + mobile-app demo for Wandr, an AI travel agent for India. Built as a TanStack Start app, with the original interactive HTML prototype embedded inside a phone-frame demo.

## What it is

- **Landing site** at `/` — hero, feature cards, live demo, pricing, and waitlist.
- **Flow pages** at `/flows/chat`, `/flows/booking`, `/flows/budget`, `/flows/explore` — deep-dive pages for each major feature, each with a live phone preview linked to the relevant app screen.
- **Mobile app** at `/app` — the original Wandr prototype running fullscreen on phones, or inside a realistic phone bezel on desktop.

## Tech stack

- [TanStack Start](https://tanstack.com/start) — React framework with file-based routing
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — accessible UI primitives
- [Lucide React](https://lucide.dev/) — icons
- [Bun](https://bun.sh/) — package manager and runtime

## Project structure

```text
src/
  components/
    PhoneFrame.tsx      # Mobile device bezel
    FlowPage.tsx        # Shared layout for /flows/* pages
    ui/                 # shadcn/ui components
  hooks/
    use-mobile.tsx      # Mobile viewport detection
  routes/
    __root.tsx          # Root layout, fonts, SEO defaults
    index.tsx           # Landing page
    app.tsx             # Mobile app demo
    flows.chat.tsx      # Chat/AI agent flow
    flows.booking.tsx   # Booking/checkout flow
    flows.budget.tsx    # Budget ring flow
    flows.explore.tsx   # Explore/map flow
    sitemap[.]xml.ts    # Dynamic sitemap
public/
  wandr-app.html      # Original interactive prototype
  robots.txt
```

## Scripts

```bash
bun run dev      # Start dev server
bun run build    # Production build
bun run preview  # Preview production build
bun run lint     # Run ESLint
bun run format   # Run Prettier
```

## Notes

- The original prototype (`public/wandr-app.html`) is preserved unchanged so the app behavior stays exactly 1:1 with the HTML version.
- The landing pages and flow pages are built in React/TanStack Start, with live phone previews that deep-link to specific screens in the embedded prototype.
- No backend or real persistence is included yet; auth, bookings, and waitlist are mocked locally just like the original prototype.

## Deploy

This project is developed in [Lovable](https://lovable.dev) and can be synced to GitHub via **Plus (+) → GitHub → Connect project**.
