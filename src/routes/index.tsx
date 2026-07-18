import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  MessageCircle,
  Train,
  Plane,
  Bus,
  Car,
  Hotel,
  Wallet,
  Map,
  Sparkles,
  ArrowRight,
  Check,
  Ticket,
  Compass,
} from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import heroImg from "@/assets/hero-travel.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
}

/* --------------------------------- NAV --------------------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-ink">
          <span
            className="h-3 w-3 rounded-full bg-saffron"
            style={{ boxShadow: "0 0 0 5px var(--saffron-soft)" }}
          />
          Wandr
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          <a href="#how" className="transition hover:text-ink">How it works</a>
          <Link to="/flows/chat" className="transition hover:text-ink">Chat</Link>
          <Link to="/flows/booking" className="transition hover:text-ink">Booking</Link>
          <Link to="/flows/budget" className="transition hover:text-ink">Budget</Link>
          <Link to="/flows/explore" className="transition hover:text-ink">Explore</Link>
          <a href="#pricing" className="transition hover:text-ink">Pricing</a>
        </nav>
        <Link
          to="/app"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-rail"
        >
          Open app
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

/* --------------------------------- HERO -------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-8 md:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
            <Sparkles className="h-3.5 w-3.5" />
            AI travel agent · Built for India
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] text-ink md:text-7xl">
            Chat once.
            <br />
            <span className="italic text-saffron">Travel everywhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Wandr is a warm, mobile AI companion that plans your trip, books
            trains, flights, buses and stays, tracks your budget, and shows you
            what to explore — all from one calm conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/app"
              className="group inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-base font-semibold text-white transition hover:brightness-105"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              Try the live demo
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-base font-semibold text-ink transition hover:border-rail"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-jade" /> IRCTC ready</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-jade" /> redBus linked</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-jade" /> 12 languages</span>
          </div>
        </div>

        {/* Right: image collage + floating phone */}
        <div className="relative">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <img
              src={heroImg}
              alt="Warm travel scenes across India"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, oklch(0.24 0.05 265 / 0.35) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                  Trip 2481
                </div>
                <div className="font-display text-2xl font-bold">
                  Delhi → Jaisalmer
                </div>
              </div>
              <div className="rounded-full bg-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                7 days · ₹42,300
              </div>
            </div>
          </div>

          {/* Floating chat bubble */}
          <div
            className="absolute -left-6 top-8 hidden max-w-[240px] rounded-2xl border border-line bg-card p-4 md:block"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-saffron">
              You
            </div>
            <div className="text-sm text-ink">
              plan me a 5-day Rajasthan trip under 40k
            </div>
          </div>

          <div
            className="absolute -bottom-6 -right-4 hidden max-w-[260px] rounded-2xl border border-line bg-rail p-4 text-white md:block"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="mb-1 font-mono text-[9px] uppercase tracking-widest opacity-70">
              Wandr
            </div>
            <div className="text-sm leading-relaxed">
              Booked Rajdhani to Jaipur, 2 nights at a haveli, and a cab to
              Jaisalmer. You're ₹3,700 under budget ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ LOGO STRIP ----------------------------- */

function LogoStrip() {
  const items = [
    { icon: Train, label: "IRCTC" },
    { icon: Plane, label: "IndiGo · Air India" },
    { icon: Bus, label: "redBus" },
    { icon: Car, label: "Ola · Uber" },
    { icon: Hotel, label: "MakeMyTrip · Airbnb" },
  ];
  return (
    <section className="border-y border-line/60 bg-card/50 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 md:px-8">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Books through
        </span>
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft"
          >
            <Icon className="h-4 w-4" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- HOW IT WORKS ---------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: MessageCircle,
      title: "Chat",
      body: "Tell Wandr where and when — in any Indian language. It listens, plans, and asks the right questions back.",
    },
    {
      n: "02",
      icon: Ticket,
      title: "Book",
      body: "Trains, flights, buses, cabs and stays — one calm flow. Real fares, real timings, one tap to confirm.",
    },
    {
      n: "03",
      icon: Compass,
      title: "Travel",
      body: "Live tickets in your pocket, a budget ring that keeps you honest, and a local map of what to see.",
    },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-14 max-w-2xl">
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
          How it works
        </div>
        <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
          Three steps.
          <span className="italic text-ink-soft"> The whole trip.</span>
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map(({ n, icon: Icon, title, body }) => (
          <div
            key={n}
            className="group relative overflow-hidden rounded-3xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:border-saffron"
            style={{ boxShadow: "0 1px 2px oklch(0.24 0.05 265 / 0.04)" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">
                {n}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-saffron-soft text-saffron">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className="mb-2 font-display text-2xl font-bold text-ink">{title}</h3>
            <p className="text-[15px] leading-relaxed text-ink-soft">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- FEATURES ------------------------------ */

function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Agent that actually books",
      body: "Not another chatbot. Wandr takes action — searching, filtering, and holding fares while you decide.",
      tone: "saffron",
    },
    {
      icon: Train,
      title: "Every mode, one place",
      body: "Trains via IRCTC, flights via top OTAs, redBus buses, cab rides and hotels — no tab-switching.",
      tone: "rail",
    },
    {
      icon: Ticket,
      title: "Live tickets in your pocket",
      body: "PNR, seat, coach, boarding — all in one clean sheet. Cancel or share in a tap.",
      tone: "jade",
    },
    {
      icon: Wallet,
      title: "Budget ring, in your face",
      body: "Set a trip budget once. Wandr splits it across travel, stay, food and fun and warns you before you overshoot.",
      tone: "saffron",
    },
    {
      icon: Map,
      title: "Explore where you land",
      body: "A local map with hand-picked stops — food, forts, quiet corners. Filters that actually match how you travel.",
      tone: "rail",
    },
    {
      icon: Sparkles,
      title: "Speaks your language",
      body: "Hindi, Tamil, Bengali, Marathi, Gujarati, Kannada, Telugu and more. Voice-first when your hands are full.",
      tone: "jade",
    },
  ];
  const toneStyles: Record<string, string> = {
    saffron: "bg-saffron-soft text-saffron",
    rail: "bg-rail/10 text-rail",
    jade: "bg-jade-soft text-jade",
  };
  return (
    <section id="features" className="border-t border-line/60 bg-card/40 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
            Features
          </div>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Everything a great travel agent does.
            <span className="italic text-ink-soft"> Without the phone tag.</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body, tone }) => (
            <div
              key={title}
              className="rounded-3xl border border-line bg-card p-7 transition hover:border-ink"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${toneStyles[tone]}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ LIVE DEMO ------------------------------ */

function LiveDemo() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid items-center gap-14 md:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
            Live demo
          </div>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
            The real app.
            <br />
            <span className="italic text-ink-soft">Right here.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            No sign-up, no download. Tap the phone and try booking a Delhi →
            Jaipur train, set a budget, or ask the agent for a weekend plan.
            Every screen is live.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Chat with the AI agent",
              "Book trains, flights, buses, cabs, hotels",
              "Track your trip budget",
              "Explore places on a real map",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-ink">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-jade text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px]">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/app"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-paper transition hover:bg-rail"
          >
            Open the full app
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <PhoneFrame>
            <iframe
              title="Wandr live preview"
              src="/wandr-app.html"
              className="h-full w-full border-0"
              loading="lazy"
              allow="clipboard-read; clipboard-write; microphone"
            />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PRICING ------------------------------- */

function Pricing() {
  const tiers = [
    {
      name: "Explorer",
      price: "Free",
      note: "For casual travellers",
      features: [
        "Unlimited AI chat",
        "Book trains, buses, cabs",
        "1 active trip at a time",
        "Basic budget tracking",
      ],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Wanderer",
      price: "₹299",
      per: "/month",
      note: "For the always-on traveller",
      features: [
        "Everything in Explorer",
        "Unlimited trips + flights",
        "Voice mode in 12 languages",
        "Priority booking + fare alerts",
        "Offline tickets & maps",
      ],
      cta: "Go Pro",
      highlight: true,
    },
  ];
  return (
    <section id="pricing" className="border-t border-line/60 bg-card/40 py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-14 text-center">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
            Pricing
          </div>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
            Simple. Honest.
            <span className="italic text-ink-soft"> Cancel anytime.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border p-8 transition ${
                t.highlight
                  ? "border-saffron bg-card"
                  : "border-line bg-card hover:border-ink"
              }`}
              style={t.highlight ? { boxShadow: "var(--shadow-warm)" } : undefined}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-saffron px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                  Most loved
                </span>
              )}
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {t.note}
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-ink">
                {t.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-ink">
                  {t.price}
                </span>
                {t.per && (
                  <span className="text-ink-soft">{t.per}</span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-jade" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/app"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition ${
                  t.highlight
                    ? "bg-saffron text-white hover:brightness-105"
                    : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WAITLIST ------------------------------ */

function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(1284);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("wandr:waitlist");
    if (stored) setDone(true);
    const c = window.localStorage.getItem("wandr:waitlist-count");
    if (c) setCount(Number(c));
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    window.localStorage.setItem("wandr:waitlist", email);
    const next = count + 1;
    window.localStorage.setItem("wandr:waitlist-count", String(next));
    setCount(next);
    setDone(true);
  };

  return (
    <section className="mx-auto max-w-4xl px-5 py-24 md:px-8">
      <div
        className="relative overflow-hidden rounded-[32px] border border-line bg-ink p-10 text-center md:p-16"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(600px 300px at 20% 0%, oklch(0.72 0.17 45 / 0.35), transparent 60%), radial-gradient(500px 250px at 100% 100%, oklch(0.66 0.12 165 / 0.25), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
            Join the waitlist
          </div>
          <h2 className="font-display text-4xl font-bold text-paper md:text-5xl">
            Be first to travel with Wandr.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-paper/70">
            We're rolling out to travellers in India first.{" "}
            <span className="font-semibold text-paper">{count.toLocaleString("en-IN")}</span> already in line.
          </p>

          {done ? (
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-jade px-5 py-3 font-semibold text-white">
              <Check className="h-4 w-4" />
              You're in. We'll email you soon.
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-[15px] text-paper placeholder:text-paper/50 outline-none transition focus:border-saffron focus:bg-white/15"
              />
              <button
                type="submit"
                className="rounded-full bg-saffron px-6 py-3.5 font-semibold text-white transition hover:brightness-105"
              >
                Get early access
              </button>
            </form>
          )}
          <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-paper/50">
            No spam · unsubscribe anytime
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FOOTER ------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-ink-soft md:flex-row md:px-8">
        <div className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <span
            className="h-2.5 w-2.5 rounded-full bg-saffron"
            style={{ boxShadow: "0 0 0 4px var(--saffron-soft)" }}
          />
          Wandr
        </div>
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} · Made with care in India
        </div>
        <div className="flex gap-5">
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
          <Link to="/app" className="hover:text-ink">App</Link>
        </div>
      </div>
    </footer>
  );
}
