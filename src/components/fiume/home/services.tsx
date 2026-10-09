import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CarFront, Users, Plane, KeyRound } from "lucide-react";
import { services } from "@/data/fiume";
import { LocalPhoto } from "../local-photo";
const icons = [CarFront, Users, Plane, KeyRound];
export function HomeServices() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PRIJEVOZ PO VAŠOJ MJERI</span>
            <h2>
              Kamo god krenuli,
              <br />
              tu smo za vas.
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Nudimo više vrsta prijevoza kako bismo
              <br className="desktop-break" /> zadovoljili sve vaše potrebe.
            </p>
            <Link to="/vrste-vozila" className="text-link">
              Sve vrste prijevoza
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="service-grid">
          {services.map((s, i) => {
            const Icon = icons[i] ?? CarFront;
            return (
              <Link className="service-card" to="/vrste-vozila" hash={s.id} key={s.id}>
                <div className="service-image">
                  <LocalPhoto src={s.image} alt={s.title} loading="lazy" />
                  <span className="service-number">0{i + 1}</span>
                </div>
                <div className="service-title">
                  <h3>{s.title}</h3>
                  <ArrowUpRight />
                </div>
                <span className="service-category">
                  <Icon size={14} />
                  {s.label}
                </span>
                <p>{s.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
