# Wandr — Landing Pages + Mobile App Build

## Scope
Rebuild your 2145-line HTML prototype as a real TanStack Start app, plus marketing landing pages around it. Everything visual + interactive from your HTML — chat agent, booking modes, trips, budget ring, explore map, settings, checkout, auth, onboarding — ported 1:1 into React components with the same look, animation, and behavior.

## Routes

```
/                → Landing page (hero + live demo + features + how it works + waitlist)
/app             → The mobile app (phone-framed, all 6 screens + auth + onboarding + checkout)
```

The `/app` route renders inside the same phone frame as your HTML, so on desktop it looks like a device mockup and on mobile it fills the screen.

## Landing Page Sections
1. **Hero** — big Fraunces headline, tagline, CTA → `/app`, and a live phone-framed mini-demo on the right (real React app, not a screenshot)
2. **Feature walkthrough** — 6 cards: AI Agent chat, Multi-mode booking (train/flight/bus/cab/hotel), Trip tickets, Budget ring, Explore map, Connected accounts
3. **How it works** — 3 steps: Chat → Book → Travel
4. **Pricing / Waitlist** — free tier + pro tier + email capture (stored to localStorage for now; can wire to Cloud later)
5. **Footer** — brand, links

## Mobile App Architecture

### Design system (`src/styles.css`)
Port every token from your HTML `:root`: ink, saffron, jade, paper, card, line, rail — as oklch semantic tokens. Fraunces + Outfit + IBM Plex Mono via `<link>` tags in `__root.tsx`.

### State (`src/app/store.ts`)
Single Zustand store mirroring your global JS state: `user`, `trip`, `messages`, `tickets`, `budget`, `connections`, `activeScreen`. Persisted to localStorage so refreshes keep state exactly like your HTML `save()`/`load()` calls.

### Components (`src/components/app/`)
- `PhoneFrame` — the outer bezel + topbar + bottom tabbar
- `AuthScreen`, `OnboardingScreen`, `AgentScreen`, `BookScreen`, `TripsScreen`, `BudgetScreen`, `ExploreScreen`, `SettingsScreen`
- `CheckoutSheet`, `TicketSheet` — full-screen overlays
- `ChatBubble`, `ModeCard`, `SearchCard`, `ResultCard`, `Ticket`, `BudgetRing`, `CategoryBar`, `POICard`
- `ExploreMap` — Leaflet, lazy-loaded behind `<ClientOnly>` (TanStack requires this for browser-only libs)

### Behavior parity
- Same fake agent responses / booking search stubs / mock results as your HTML
- Same checkout 3-step flow (details → payment → confirm) with the same total math
- Same budget ring math, alerts, category breakdown
- Same auth flow (email + password stored locally, same validation rules)
- Same IRCTC / redBus / flight-agent connect forms
- Voice banner + mic button (visual only, matching your HTML)

### What's intentionally NOT included
- Real backend — auth, bookings, payments stay local/mock exactly like your HTML
- No Lovable Cloud yet — can be added later when you want real persistence

## Technical notes
- TanStack file-based routes: `src/routes/index.tsx` (landing), `src/routes/app.tsx` (mobile app)
- Leaflet dynamic import inside `useEffect` to avoid SSR crash
- All localStorage reads wrapped in `useEffect` for hydration safety
- Framer Motion for the screen slide-l/slide-r animations
- SEO meta on landing page: title, description, og tags

## Delivery
Because of the size (~15 screens, ~2000 lines to port), I'll build in this order in a single pass:
1. Design tokens + fonts + phone frame + tabbar + routing
2. Auth + onboarding + agent chat screen
3. Book + results + checkout
4. Trips + tickets + budget
5. Explore map + settings + connections
6. Landing page

If you want to trim scope (e.g. skip the map, skip checkout for v1), tell me now and I'll adjust.