import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, PageIntro, CallBand } from "@/components/fiume/layout";
import { Button } from "@/components/ui/button";
import { assets, services, rates, formatEuro, pageHead } from "@/data/fiume";
export const Route = createFileRoute("/vrste-vozila")({
  head: () =>
    pageHead(
      "Vrste prijevoza",
      "Gradski taksi, kombi prijevoz, transferi i rent a car u Rijeci. Upoznajte vozila i sve usluge Taxi Fiume.",
    ),
  component: Services,
});
const vanTrips = [
  "Prijevozi (transferi) od/do zračnih luka, autobusnih i željezničkih postaja, hotela, motela, kampova, poslovnih i stambenih objekata te turistička putovanja.",
  "Poslovna putovanja: seminari, kongresi, sajmovi i poslovni sastanci.",
  "Prijevozi na sportska događanja i koncerte.",
  "Prijevozi na kulturne manifestacije i privatne izlete.",
  "Prijevozi prema poznatim shopping centrima: Palmanova, Noventa di Piave i mnogi drugi.",
  "Prijevoz na svečana događanja: vjenčanja, krštenja, maturalne zabave i rođendane.",
  "Ostali prijevozi po vašim zahtjevima i željenim destinacijama.",
];
const transfers = [
  "Od/do zračnih luka, autobusnih i željezničkih kolodvora, hotela, motela i međugradski transferi.",
  "Poslovni transferi na seminare, kongrese, sajmove i poslovne sastanke.",
  "Transferi do raznih medicinskih centara.",
  "Ostali transferi po vašim zahtjevima i željenim destinacijama.",
];
function Services() {
  return (
    <SiteLayout>
      <PageIntro
        title="Vrste prijevoza"
        description="Nudimo više vrsta prijevoza kako bismo zadovoljili sve vaše potrebe."
        image={assets.hero.url}
      />
      {services.map((s, i) => (
        <section className="detail-service" id={s.id} key={s.id}>
          <div className="container detail-service-grid">
            <div>
              <span className="eyebrow">
                0{i + 1} · {s.label}
              </span>
              <h2>{s.title}</h2>
              <p>
                {s.id === "kombi-prijevoz"
                  ? "Kako nam je sigurnost i udobnost naših klijenata na prvom mjestu, nudimo vam kombi prijevoz putnika novim, sigurnim i bogato opremljenim kombi vozilima marke Opel Vivaro najnovije generacije. Kako bi vam omogućili potpunu fleksibilnost i najkvalitetniju uslugu prijevoza putnika, u ponudu smo uvrstili:"
                  : s.id === "transferi"
                    ? "Također nudimo i transfere novim i bogato opremljenim osobnim i kombi vozilima."
                    : s.id === "rent-a-car"
                      ? "Iznajmite vozilo za svoje potrebe kod nas! Fleksibilne opcije najma, povoljne cijene i pouzdana usluga. Rezervirajte danas i uživajte u slobodi vožnje."
                      : s.description}
              </p>
              {(s.id === "kombi-prijevoz" || s.id === "transferi") && (
                <ul>
                  {(s.id === "kombi-prijevoz" ? vanTrips : transfers).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {s.id === "rent-a-car" && (
                <div className="rental-price">
                  {formatEuro(rates.rental)} <small>/ dan · Opel Vivaro</small>
                </div>
              )}
              {s.id === "gradski-taksi" && (
                <div className="rental-price">
                  5 km = {rates.cityStart} €{" "}
                  <small>· svaki sljedeći km {formatEuro(rates.cityKm)}</small>
                </div>
              )}
              <Button asChild size="lg">
                <Link
                  to="/kontakt"
                  search={{
                    tema: s.topic,
                  }}
                >
                  Kontaktirajte nas
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
            <div>
              <img src={s.image} alt={s.title} loading="lazy" />
              {s.id === "kombi-prijevoz" && (
                <div className="detail-gallery">
                  <img src={assets.interior.url} alt="Unutrašnjost kombi vozila" loading="lazy" />
                  <img src={assets.van.url} alt="Opel Vivaro" loading="lazy" />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
      <CallBand />
    </SiteLayout>
  );
}
