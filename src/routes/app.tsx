import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Wandr App — Live Demo" },
      {
        name: "description",
        content:
          "The full Wandr mobile experience — chat with the AI agent, book trains, flights, buses and stays, track your budget and explore India.",
      },
      { property: "og:title", content: "Wandr App — Live Demo" },
      {
        property: "og:description",
        content: "The full Wandr mobile experience running in your browser.",
      },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const isMobile = useIsMobile();

  // On phones and small screens: render the app fullscreen — no bezel, no
  // top chrome — so it behaves like an installed mobile app.
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-40 bg-paper">
        <Link
          to="/"
          aria-label="Back to landing"
          className="absolute left-3 top-[max(env(safe-area-inset-top),0.75rem)] z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/85 text-paper backdrop-blur"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <iframe
          title="Wandr app"
          src="/wandr-app.html"
          className="h-full w-full border-0"
          allow="clipboard-read; clipboard-write; microphone; geolocation"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-5 py-4 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-rail hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink">
          <span
            className="h-2.5 w-2.5 rounded-full bg-saffron"
            style={{ boxShadow: "0 0 0 4px var(--saffron-soft)" }}
          />
          Wandr
        </div>
        <div className="w-[72px]" />
      </header>

      <main className="flex flex-1 items-center justify-center px-4 pb-10 md:px-6">
        <div className="w-full max-w-[430px]">
          <PhoneFrame>
            <iframe
              title="Wandr app"
              src="/wandr-app.html"
              className="h-full w-full border-0"
              allow="clipboard-read; clipboard-write; microphone; geolocation"
            />
          </PhoneFrame>
          <p className="mx-auto mt-5 max-w-sm text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Live demo · everything works · try the chat, book a train, set a budget
          </p>
        </div>
      </main>
    </div>
  );
}
