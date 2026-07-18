import { createFileRoute } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { FlowPage } from "@/components/FlowPage";

export const Route = createFileRoute("/flows/booking")({
  head: () => ({
    meta: [
      { title: "Booking & Checkout — Trains, Flights, Buses, Stays" },
      {
        name: "description",
        content:
          "One calm checkout for IRCTC trains, flights, redBus, cabs and hotels. Real fares, one tap to confirm, tickets in your pocket.",
      },
      { property: "og:title", content: "Wandr Booking — Every mode, one checkout" },
      {
        property: "og:description",
        content: "Trains, flights, buses, cabs, hotels — booked without tab-switching.",
      },
    ],
  }),
  component: () => (
    <FlowPage
      eyebrow="Booking & checkout"
      title={
        <>
          Every mode. <span className="italic text-saffron">One checkout.</span>
        </>
      }
      lede="Wandr connects to IRCTC, top flight OTAs, redBus, cab providers and stays. You pick, confirm and pay in a single three-step sheet — no tab-switching, no re-typing passenger details."
      screen="book"
      Icon={Ticket}
      tone="rail"
      bullets={[
        "Trains, flights, buses, cabs and hotels in one flow",
        "Passenger details saved securely, filled once",
        "Three-step checkout: details → payment → confirm",
        "Live tickets land in Trips with PNR, seat and coach info",
      ]}
      steps={[
        {
          n: "01",
          title: "Pick a mode",
          body: "Big, thumb-friendly mode cards. Tap 'Train', and Wandr pre-fills origin, destination and date from your chat.",
        },
        {
          n: "02",
          title: "Compare in seconds",
          body: "Result cards show fare, duration, availability and refund rules side-by-side. Filter by budget or class in one tap.",
        },
        {
          n: "03",
          title: "Confirm and go",
          body: "The checkout sheet totals travel, taxes and fees clearly. UPI, cards and net-banking supported. Ticket saved instantly.",
        },
      ]}
      nextHref="/flows/budget"
      nextLabel="Budget rings"
    />
  ),
});
