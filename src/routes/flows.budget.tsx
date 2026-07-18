import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { FlowPage } from "@/components/FlowPage";

export const Route = createFileRoute("/flows/budget")({
  head: () => ({
    meta: [
      { title: "Budget Rings — Know What You've Spent, In One Glance" },
      {
        name: "description",
        content:
          "Set a trip budget once. Wandr splits it across travel, stay, food and fun, and warns you before you overshoot.",
      },
      { property: "og:title", content: "Wandr Budget Rings — Stay in control, effortlessly" },
      {
        property: "og:description",
        content: "A calm ring that shows exactly where your money is going.",
      },
    ],
  }),
  component: () => (
    <FlowPage
      eyebrow="Budget rings"
      title={
        <>
          See your spend. <span className="italic text-saffron">In one calm ring.</span>
        </>
      }
      lede="Set the trip budget once and Wandr splits it into Travel, Stay, Food and Fun. Every booking, every UPI receipt updates the ring live — with gentle warnings before you overshoot."
      screen="budget"
      Icon={Wallet}
      tone="jade"
      bullets={[
        "Ring turns amber at 80% and red at 100% of any category",
        "Auto-categorises bookings — no spreadsheet needed",
        "Add cash spends by tapping the '+' on any category",
        "Daily breakdown shows where the money actually went",
      ]}
      steps={[
        {
          n: "01",
          title: "Set the total",
          body: "One number — say ₹40,000 for 5 days. Wandr suggests a healthy split you can tweak with a drag.",
        },
        {
          n: "02",
          title: "Everything counts itself",
          body: "Train tickets go to Travel, hotel to Stay, meals to Food. Nothing to log unless you paid in cash.",
        },
        {
          n: "03",
          title: "Gentle nudges",
          body: "'You're ₹3,700 under budget ✨' or 'Food is at 92% — want to skip that fancy dinner?' — never a lecture.",
        },
      ]}
      nextHref="/flows/explore"
      nextLabel="Explore map"
    />
  ),
});
