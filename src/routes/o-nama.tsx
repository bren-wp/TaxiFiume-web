import { LocalPhoto } from "@/components/fiume/local-photo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Clock3, Wallet } from "lucide-react";
import { SiteLayout, PageIntro, CallBand } from "@/components/fiume/layout";
import { Button } from "@/components/ui/button";
import { assets } from "@/data/fiume";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/o-nama")({
  head: () =>
    pageHead(
      "O nama — pouzdan taxi prijevoz u Rijeci",
      "Upoznajte Taxi Fiume — vaš pouzdan prijevoz u Rijeci. Sigurna, udobna i dobro opremljena vozila, dostupna 0–24.",
      { path: "/o-nama" },
    ),
  component: About,
});
function About() {
  return (
    <SiteLayout>
      <PageIntro
        title="O nama"
        description="Taxi Fiume je cijenom pristupačan svima, ali je u isto vrijeme i najbolji način prijevoza."
        image={assets.rijeka.url}
      />
      <section className="section">
        <div className="container about-grid">
          <LocalPhoto
            className="fleet-photo"
            src={assets.hero.url}
            alt="Taxi Fiume vozni park u Rijeci"
          />
          <div className="about-copy">
            <span className="eyebrow">IZ RIJEKE. ZA RIJEKU.</span>
            <h2>
              Vaše povjerenje.
              <br />
              Naša odgovornost.
            </h2>
            <p>
              Brinemo o svojim klijentima upravo na način da stavljamo njihove želje, potrebe te
              njihovo zadovoljstvo na prvo mjesto! Naručite svoje vozilo i uživajte u kvaliteti
              naših usluga!
            </p>
            <div className="about-points">
              <span>
                <ShieldCheck />
                Povjerenje
              </span>
              <span>
                <Clock3 />7 dana u tjednu
              </span>
              <span>
                <Wallet />
                Najniže cijene
              </span>
            </div>
            <Button asChild variant="outline">
              <Link to="/kontakt">
                Javite nam se
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <span className="eyebrow">SIGURNOST I UDOBNOST</span>
          <h2>Naša vozila</h2>
          <p className="price-notes">
            Kako nam je sigurnost i udobnost naših klijenata na prvom mjestu, nudimo vam prijevoz
            putnika novim, sigurnim i dobro opremljenim vozilima.
          </p>
          <div className="gallery-grid">
            {[
              assets.city,
              assets.van,
              assets.interior,
              assets.transfer,
              assets.small,
              assets.rear,
            ].map((a, i) => (
              <LocalPhoto
                key={a.url}
                src={a.url}
                alt={
                  [
                    "Taxi Fiume osobna vozila na riječkoj rivi",
                    "Opel Vivaro za kombi prijevoz",
                    "Unutrašnjost Taxi Fiume vozila",
                    "Škoda Superb za transfere",
                    "Taxi Fiume gradsko vozilo",
                    "Stražnji dio Taxi Fiume vozila",
                  ][i] ?? "Taxi Fiume vozni park"
                }
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      <CallBand />
    </SiteLayout>
  );
}
