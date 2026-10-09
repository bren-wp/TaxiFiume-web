import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteLayout, PageIntro, CallBand } from "@/components/fiume/layout";
import { Button } from "@/components/ui/button";
import { assets, rates, formatEuro } from "@/data/fiume";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/cjenik")({
  head: () =>
    pageHead(
      "Cjenik taxi prijevoza u Rijeci",
      "Taxi Fiume cjenik: osobno vozilo 5 km = 7 €, kombi prijevoz 5 km = 14 €. Preuzmite službeni cjenik.",
      { path: "/cjenik" },
    ),
  component: Prices,
});
function Prices() {
  return (
    <SiteLayout>
      <PageIntro
        title="Cjenik"
        description="Taxi Fiume je cijenom pristupačan svima, ali je u isto vrijeme i najbolji način prijevoza."
        image={assets.city.url}
      />
      <section className="section">
        <div className="container">
          <span className="eyebrow">JASNE CIJENE. UGODNA VOŽNJA.</span>
          <h2>Gradski prijevoz</h2>
          <p className="price-notes">
            Najpovoljniji i najpouzdaniji taxi na području Riječkog prstena, dostupan 0–24.
          </p>
          <div className="price-grid">
            <div className="price-item">
              <h3>Osobno vozilo</h3>
              <div className="big-price">{formatEuro(rates.cityStart)}</div>
              <div className="price-unit">Start i uključenih prvih 5 km unutar grada Rijeke</div>
              <div className="price-row">
                <span>Svaki sljedeći kilometar unutar grada</span>
                <strong>{formatEuro(rates.cityKm)} / km</strong>
              </div>
              <div className="price-row">
                <span>Čekanje</span>
                <strong>{formatEuro(rates.waiting)} / sat</strong>
              </div>
              <div className="price-row">
                <span>Kućni ljubimci</span>
                <strong>Po dogovoru</strong>
              </div>
            </div>
            <div className="price-item">
              <h3>Kombi prijevoz</h3>
              <div className="big-price">{formatEuro(rates.vanStart)}</div>
              <div className="price-unit">Prvih 5 km unutar grada</div>
              <div className="price-row">
                <span>Svaki sljedeći kilometar unutar grada</span>
                <strong>{formatEuro(rates.vanKm)} / km</strong>
              </div>
              <p>Kod prijevoza 5+ osoba cijena se može razlikovati.</p>
            </div>
          </div>
          <Button asChild variant="outline" size="lg" className="price-download">
            <a href={assets.pricePdf.url} target="_blank" rel="noreferrer">
              <Download />
              Preuzmite službeni cjenik
            </a>
          </Button>
          <div className="price-notes">
            Međugradske vožnje i vožnje izvan grada naplaćuju se prema posebnom cjeniku. Konačna
            cijena određuje se prema važećem cjeniku i stvarno izvršenoj usluzi prijevoza.
            <br />
            Sukladno čl. 10. st. 3. Zakona o zaštiti potrošača, pisane prigovore pošaljite na
            taxi.fiume051@gmail.com. Odgovor na pisani prigovor dajemo najkasnije 15 dana od
            primitka. Za ostavljene predmete u vozilu ne odgovaramo.
          </div>
        </div>
      </section>
      <CallBand />
    </SiteLayout>
  );
}
