import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, contact } from "@/data/fiume";
import { LocalPhoto } from "../local-photo";
export function HomeHero() {
  return (
    <section className="home-hero">
      <LocalPhoto
        className="hero-photo"
        src={assets.hero.url}
        alt="Originalna Taxi Fiume vozila na riječkoj rivi"
        fetchPriority="high"
        loading="eager"
        sizes="(max-width: 900px) calc(100vw - 40px), 100vw"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-label">
          <span className="status-dot" />
          RIJEKA I OKOLICA <span className="hero-label-divider" /> DOSTUPNI 0–24
        </div>
        <h1>Taxi Fiume.</h1>
        <div className="hero-lead">
          Vaš grad. <span>Vaš taxi.</span>
        </div>
        <p>
          Najbrži taxi u vašem gradu. Sigurno, udobno
          <br className="desktop-break" /> i po pristupačnoj cijeni — kad god nas trebate.
        </p>
        <div className="hero-actions">
          <Button asChild variant="hero" size="lg">
            <a href={contact.tel}>
              <Phone />
              Naručite taxi
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <Link to="/cjenik">
              Pogledajte cjenik
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="hero-caption">
        <MapPin size={14} /> Rijeka, Hrvatska <span>Naš grad. Naše ulice.</span>
      </div>
    </section>
  );
}
