import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indian Tax Agent — FY 2025-26" },
      { name: "description", content: "Compute income tax for FY 2025-26 (AY 2026-27) under both old and new regimes, with AI-powered guidance." },
      { property: "og:title", content: "Indian Tax Agent — FY 2025-26" },
      { property: "og:description", content: "Compute income tax for FY 2025-26 under both regimes with AI-powered guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/tax-agent.html"
      title="Indian Tax Agent"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
