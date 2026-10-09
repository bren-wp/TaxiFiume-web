import blocks from "@/data/legal/uvjeti-koristenja.json";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/fiume/legal-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/uvjeti-koristenja")({
  head: () =>
    pageHead(
      "Uvjeti korištenja",
      "Uvjeti korištenja — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.",
      { path: "/uvjeti-koristenja" },
    ),
  component: () => <LegalPage blocks={blocks} title="Uvjeti korištenja" />,
});
