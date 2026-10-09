import blocks from "@/data/legal/impressum.json";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/fiume/legal-page";
import { pageHead } from "@/data/fiume";
export const Route = createFileRoute("/impressum")({
  head: () =>
    pageHead(
      "Impressum",
      "Impressum — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.",
      { path: "/impressum" },
    ),
  component: () => <LegalPage blocks={blocks} title="Impressum" />,
});
