import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/fiume/layout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/data/fiume";
export const Route = createFileRoute("/coming-soon")({
  head: () =>
    pageHead(
      "Uskoro",
      "Taxi Fiume — uskoro nove informacije. Posjetite naslovnicu za sve usluge i kontakt.",
      { path: "/coming-soon" },
    ),
  component: () => (
    <SiteLayout>
      <PageIntro title="Uskoro" description="Nove informacije pripremamo za vas. Naše usluge i kontakt dostupni su već sada." />
      <section className="section">
        <div className="container coming-content">
          <h2>Taxi Fiume je tu za vas.</h2>
          <p>Za naručivanje prijevoza nazovite 051 515 515, a sve vrste prijevoza i cijene pronađite na našim stranicama.</p>
          <div className="coming-actions">
            <Button asChild size="lg"><a href={contact.tel}><Phone aria-hidden="true" />Nazovite taxi</a></Button>
            <Button asChild variant="outline" size="lg"><Link to="/vrste-vozila">Vrste prijevoza<ArrowUpRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="link" size="lg"><Link to="/cjenik">Pogledajte cjenik<ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
