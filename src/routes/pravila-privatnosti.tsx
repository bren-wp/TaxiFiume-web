import blocks from "@/data/legal/pravila-privatnosti.json";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/fiume/legal-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/pravila-privatnosti")({
  head: () =>
    pageHead(
      "Pravila privatnosti",
      "Pravila privatnosti — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.",
      { path: "/pravila-privatnosti" },
    ),
  component: () => <LegalPage blocks={blocks} title="Pravila privatnosti" />,
});
