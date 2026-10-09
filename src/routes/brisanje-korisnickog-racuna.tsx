import blocks from "@/data/legal/brisanje-korisnickog-racuna.json";
import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/fiume/legal-page";
import { pageHead } from "@/data/fiume";
export const Route = createFileRoute("/brisanje-korisnickog-racuna")({
  head: () =>
    pageHead(
      "Brisanje korisničkog računa",
      "Brisanje korisničkog računa — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.",
      { path: "/brisanje-korisnickog-racuna" },
    ),
  component: () => <LegalPage blocks={blocks} title="Brisanje korisničkog računa" />,
});
