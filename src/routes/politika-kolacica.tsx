import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/fiume/layout";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/politika-kolacica")({
  head: () =>
    pageHead(
      "Politika kolačića",
      "Informacije o kolačićima i privatnosti na web stranici Taxi Fiume.",
      { path: "/politika-kolacica" },
    ),
  component: Cookies,
});
function Cookies() {
  return (
    <SiteLayout>
      <PageIntro
        title="Politika kolačića"
        description="Informacije o privatnosti tijekom posjeta ovoj web stranici."
      />
      <article className="container legal-content">
        <h2>Kolačići na ovoj stranici</h2>
        <p>
          Ova web stranica trenutačno ne postavlja analitičke niti oglašivačke kolačiće i ne koristi
          alate za praćenje posjetitelja.
        </p>
        <h2>Vanjske usluge</h2>
        <p>
          Poveznice na trgovine aplikacija, društvene mreže i karte vode na vanjske web stranice. Te
          usluge imaju vlastita pravila privatnosti i kolačića koja se primjenjuju kada ih
          posjetite.
        </p>
        <h2>Upravljanje kolačićima</h2>
        <p>Kolačiće možete pregledati, ograničiti ili izbrisati kroz postavke svog preglednika.</p>
        <h2>Zaštita podataka</h2>
        <p>
          Više informacija o obradi osobnih podataka pronađite na stranici{" "}
          <Link to="/pravila-privatnosti">Pravila privatnosti</Link>. Za pitanja pišite na{" "}
          <a href="mailto:taxi.fiume051@gmail.com">taxi.fiume051@gmail.com</a>.
        </p>
      </article>
    </SiteLayout>
  );
}
