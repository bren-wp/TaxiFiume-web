import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, ShieldCheck, Clock3, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets } from "@/data/fiume";
import { LocalPhoto } from "../local-photo";
export function HomeAbout() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-photo">
          <LocalPhoto
            src={assets.rijeka.url}
            alt="Taxi Fiume uz Gradski toranj u Rijeci"
            loading="lazy"
          />
          <div className="photo-label">
            <MapPin size={18} />
            <span>Iz Rijeke. Za Rijeku.</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow">PRAVI ODABIR ZA VAS</span>
          <h2>
            Više od vožnje.
            <br />
            Povjerenje na svakom kilometru.
          </h2>
          <p>
            Taxi Fiume je cijenom pristupačan svima, ali je u isto vrijeme i najbolji način
            prijevoza. Brinemo o svojim klijentima upravo na način da stavljamo njihove želje,
            potrebe te njihovo zadovoljstvo na prvo mjesto!
          </p>
          <div className="about-points">
            <span>
              <ShieldCheck />
              Sigurna i dobro opremljena vozila
            </span>
            <span>
              <Clock3 />7 dana u tjednu, 24 sata dnevno
            </span>
            <span>
              <Wallet />
              Najpristupačnije cijene u gradu i okolici
            </span>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link to="/o-nama">
              Upoznajte Taxi Fiume
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
