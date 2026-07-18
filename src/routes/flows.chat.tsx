import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { FlowPage } from "@/components/FlowPage";

export const Route = createFileRoute("/flows/chat")({
  head: () => ({
    meta: [
      { title: "Chat with Wandr — Your AI Travel Agent" },
      {
        name: "description",
        content:
          "Plan any trip in India by chatting in plain English or Hindi. Wandr asks the right questions, holds fares and books for you.",
      },
      { property: "og:title", content: "Chat with Wandr — Your AI Travel Agent" },
      {
        property: "og:description",
        content: "A calm conversation that plans, filters and books your whole trip.",
      },
    ],
  }),
  component: () => (
    <FlowPage
      eyebrow="Chat flow"
      title={
        <>
          Just talk. <span className="italic text-saffron">Wandr does the rest.</span>
        </>
      }
      lede="Tell Wandr where you're going in any Indian language. It asks the right questions, remembers your budget and preferences, and takes real booking actions inside the chat."
      screen="agent"
      Icon={MessageCircle}
      tone="saffron"
      bullets={[
        "Voice-first, works hands-free while you commute",
        "Understands Hindi, Tamil, Bengali, Marathi and 8 more",
        "Suggests quick-reply chips so you never stare at a blank prompt",
        "Books, cancels or reschedules — all inside the same thread",
      ]}
      steps={[
        {
          n: "01",
          title: "Say it your way",
          body: "Type or hold the mic. 'Plan me a 5-day Rajasthan trip under 40k' works exactly as well as a formal query.",
        },
        {
          n: "02",
          title: "Wandr thinks out loud",
          body: "You see the agent searching IRCTC, comparing fares, and shortlisting stays — with chips to steer it.",
        },
        {
          n: "03",
          title: "One tap to confirm",
          body: "When you're happy, the chat hands off to a clean checkout sheet. Ticket lands in your Trips tab.",
        },
      ]}
      nextHref="/flows/booking"
      nextLabel="Booking & checkout"
    />
  ),
});
