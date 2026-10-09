import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, services, rates, formatEuro } from "@/data/fiume";
import { vanTrips, transfers } from "@/data/fiume/service-details";
import { LocalPhoto } from "./local-photo";
export function ServiceDetail({
  service: s,
  index: i,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
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
          <LocalPhoto src={s.image} alt={s.title} loading="lazy" />
          {s.id === "kombi-prijevoz" && (
            <div className="detail-gallery">
              <LocalPhoto
                src={assets.interior.url}
                alt="Unutrašnjost kombi vozila"
                loading="lazy"
              />
              <LocalPhoto src={assets.van.url} alt="Opel Vivaro" loading="lazy" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
