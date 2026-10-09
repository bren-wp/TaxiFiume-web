import { Link } from "@tanstack/react-router";
import { Phone, ArrowUpRight, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { assets, contact } from "@/data/fiume";
import { nav } from "@/data/fiume/navigation";
import { AppLinks } from "./app-links";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">UVIJEK TU ZA VAS</span>
            <h2>
              Vaš sljedeći kilometar
              <br />
              počinje s nama.
            </h2>
          </div>
          <a className="footer-phone" href={contact.tel}>
            051 515 515
            <ArrowUpRight />
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/">
              <img
                width="172"
                height="54"
                loading="lazy"
                decoding="async"
                src={assets.whiteLogo.url}
                alt="Taxi Fiume"
              />
            </Link>
            <p>
              Vaš pouzdan taxi u Rijeci i okolici.
              <br />
              Sigurno, udobno i uvijek dostupno.
            </p>
            <span className="availability">
              <span />
              Dostupni 0–24, 7 dana u tjednu
            </span>
            <AppLinks />
          </div>
          <div>
            <h3>Istražite</h3>
            <Link to="/">Naslovnica</Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to}>
                {n.label}
              </Link>
            ))}
            <Link to="/pohvale-i-prituzbe">Pohvale i pritužbe</Link>
          </div>
          <div>
            <h3>Prijevoz po vašoj mjeri</h3>
            <Link to="/vrste-vozila" hash="gradski-taksi">
              Gradski taksi
            </Link>
            <Link to="/vrste-vozila" hash="kombi-prijevoz">
              Kombi prijevoz
            </Link>
            <Link to="/vrste-vozila" hash="transferi">
              Transferi
            </Link>
            <Link to="/vrste-vozila" hash="rent-a-car">
              Rent a car
            </Link>
            <Link to="/kontakt" search={{ tema: "Oglašavanje" }}>
              Oglašavanje na vozilima
            </Link>
            <a href={assets.pricePdf.url} target="_blank" rel="noreferrer">
              Preuzmite cjenik ↗
            </a>
          </div>
          <div>
            <h3>Javite nam se</h3>
            <a href={contact.tel}>
              <Phone size={15} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={15} />
              {contact.email}
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rujevica+6+Rijeka"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={15} />
              {contact.address}
            </a>
            <p>
              <Clock size={15} /> Svaki dan, 0–24
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/fiumetaxi/"
                target="_blank"
                rel="noreferrer"
                aria-label="Taxi Fiume Facebook"
              >
                <Facebook size={19} />
              </a>
              <a
                href="https://www.instagram.com/taxi_fiume/?hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Taxi Fiume Instagram"
              >
                <Instagram size={19} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <Link to="/impressum">Impressum</Link>
          <Link to="/pravila-privatnosti">Pravila privatnosti</Link>
          <Link to="/uvjeti-koristenja">Uvjeti korištenja</Link>
          <Link to="/politika-kolacica">Politika kolačića</Link>
          <Link to="/brisanje-korisnickog-racuna">Brisanje korisničkog računa</Link>
          <Link to="/brisanje-vozackog-racuna">Brisanje vozačkog računa</Link>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Taxi Fiume · FIUME d.o.o. Sva prava pridržana.</span>
          <span>
            Built with{" "}
            <a href="https://brendigo.com" target="_blank" rel="noreferrer">
              Brendigo
              <ArrowUpRight size={13} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
