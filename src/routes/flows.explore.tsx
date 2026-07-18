import { createFileRoute } from "@tanstack/react-router";
import { Map as MapIcon } from "lucide-react";
import { FlowPage } from "@/components/FlowPage";

export const Route = createFileRoute("/flows/explore")({
  head: () => ({
    meta: [
      { title: "Explore Map — Hand-Picked Stops Wherever You Land" },
      {
        name: "description",
        content:
          "A local map with hand-picked food, forts, viewpoints and quiet corners. Filters that match how you actually travel.",
      },
      { property: "og:title", content: "Wandr Explore — The map that knows the neighbourhood" },
      {
        property: "og:description",
        content: "Curated stops on a real Leaflet map, filterable by mood and budget.",
      },
    ],
  }),
  component: () => (
    <FlowPage
      eyebrow="Explore map"
      title={<>The map that knows <span className="italic text-saffron">the neighbourhood.</span></>}
      lede="Every destination in Wandr comes with a curated Leaflet map — food, monuments, viewpoints and quiet corners chosen for how you like to travel, not by ad revenue."
      screen="explore"
      Icon={MapIcon}
      tone="rail"
      bullets={[
        "Real Leaflet map, works offline once your trip is loaded",
        "Category bar: Food, Culture, Nature, Nightlife, Shopping",
        "Each pin has cost, timing, and a one-line reason it's on the map",
        "Save any stop to your day plan with one tap",
      ]}
      steps={[
        {
          n: "01",
          title: "Land somewhere",
          body: "The map centres on wherever you're staying — Delhi, Jaisalmer, Munnar. Pins load with subtle categories.",
        },
        {
          n: "02",
          title: "Filter by mood",
          body: "Tap 'Food' to see only what's worth eating. 'Nature' hides the crowded stuff. Filters combine cleanly.",
        },
        {
          n: "03",
          title: "Build your day",
          body: "Tap a POI card, hit 'Add to plan'. Wandr routes it into your day and updates the budget ring.",
        },
      ]}
      nextHref="/flows/chat"
      nextLabel="Chat flow"
    />
  ),
});
