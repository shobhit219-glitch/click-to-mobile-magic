import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, type LucideIcon } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import type { ReactNode } from "react";

export interface FlowStep {
  n: string;
  title: string;
  body: string;
}

export interface FlowPageProps {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  screen: "agent" | "book" | "trips" | "budget" | "explore" | "settings";
  bullets: string[];
  steps: FlowStep[];
  Icon: LucideIcon;
  tone?: "saffron" | "jade" | "rail";
  nextHref: string;
  nextLabel: string;
}

const toneMap = {
  saffron: "bg-saffron-soft text-saffron",
  jade: "bg-jade-soft text-jade",
  rail: "bg-rail/10 text-rail",
};

export function FlowPage({
  eyebrow,
  title,
  lede,
  screen,
  bullets,
  steps,
  Icon,
  tone = "saffron",
  nextHref,
  nextLabel,
}: FlowPageProps) {
  return (
    <div className="min-h-screen">
      {/* Slim nav */}
      <header className="sticky top-0 z-30 border-b border-line/60 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
            <span
              className="h-2.5 w-2.5 rounded-full bg-saffron"
              style={{ boxShadow: "0 0 0 4px var(--saffron-soft)" }}
            />
            Wandr
          </div>
          <Link
            to="/app"
            className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-paper transition hover:bg-rail"
          >
            Open app
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-12 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-8 md:pt-20">
        <div>
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] ${toneMap[tone]}`}
          >
            <Icon className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {lede}
          </p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-jade text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px]">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/app"
              className="group inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-base font-semibold text-white transition hover:brightness-105"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              Try it live
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/"
              hash="waitlist"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-base font-semibold text-ink transition hover:border-rail"
            >
              Join the waitlist
            </Link>
          </div>
        </div>

        {/* Live phone deep-linked to the relevant screen */}
        <div className="mt-14 flex justify-center md:mt-0">
          <div className="w-full max-w-[380px]">
            <PhoneFrame>
              <iframe
                title={`${eyebrow} preview`}
                src={`/wandr-app.html#screen=${screen}`}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </PhoneFrame>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Live · deep-linked to this screen
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-line/60 bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saffron">
              Under the hood
            </div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              How the flow feels.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-3xl border border-line bg-card p-7"
                style={{ boxShadow: "0 1px 2px oklch(0.24 0.05 265 / 0.04)" }}
              >
                <div className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">
                  {s.n}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + next flow */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <div
          className="relative overflow-hidden rounded-[32px] border border-line bg-ink p-8 text-center md:p-14"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(500px 250px at 20% 0%, oklch(0.72 0.17 45 / 0.35), transparent 60%), radial-gradient(400px 220px at 100% 100%, oklch(0.66 0.12 165 / 0.25), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-paper md:text-4xl">
              Ready to travel with Wandr?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-paper/70">
              Open the live app, or jump straight to the next flow.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3.5 font-semibold text-white transition hover:brightness-105"
              >
                Open the app
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={nextHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-paper transition hover:bg-white/10"
              >
                Next: {nextLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:px-8">
          <span>© {new Date().getFullYear()} · Wandr</span>
          <div className="flex flex-wrap gap-4">
            <Link to="/flows/chat" className="hover:text-ink">Chat</Link>
            <Link to="/flows/booking" className="hover:text-ink">Booking</Link>
            <Link to="/flows/budget" className="hover:text-ink">Budget</Link>
            <Link to="/flows/explore" className="hover:text-ink">Explore</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
