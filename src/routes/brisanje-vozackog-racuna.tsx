import blocks from "@/data/legal/brisanje-vozackog-racuna.json";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/fiume/legal-page";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/brisanje-vozackog-racuna")({
  head: () =>
    pageHead(
      "Brisanje vozačkog računa",
      "Brisanje vozačkog računa — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.",
      { path: "/brisanje-vozackog-racuna" },
    ),
  component: () => <LegalPage blocks={blocks} title="Brisanje vozačkog računa" />,
});
