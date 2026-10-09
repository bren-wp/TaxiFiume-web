import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/fiume/legal-page";
import { pageHead } from "@/data/fiume";
export const Route = createFileRoute("/brisanje-vozackog-racuna")({
  head: () =>
    pageHead(
      "Brisanje vozačkog računa",
      "Brisanje vozačkog računa — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.",
    ),
  component: () => <LegalPage slug="brisanje-vozackog-racuna" title="Brisanje vozačkog računa" />,
});
