import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Phone,
  ArrowUpRight,
  Menu,
  X,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, contact, apps } from "@/data/fiume";
const nav = [
  { to: "/cjenik", label: "Cjenik" },
  { to: "/vrste-vozila", label: "Vrste prijevoza" },
  { to: "/o-nama", label: "O nama" },
  { to: "/prijave-za-posao", label: "Prijave za posao" },
  { to: "/kontakt", label: "Kontakt" },
] as const;
export function AppLinks() {
  return (
    <div className="app-links">
      <a href={apps.play} target="_blank" rel="noreferrer">
        <img src={assets.play.url} alt="Preuzmi na Google Play" />
      </a>
      <a href={apps.apple} target="_blank" rel="noreferrer">
        <img src={assets.apple.url} alt="Preuzmi na App Store" />
      </a>
    </div>
  );
}
export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" aria-label="Taxi Fiume naslovnica" className="brand">
            <img
              className="brand-wordmark"
              src={assets.logo.url}
              alt="Taxi Fiume"
              width="172"
              height="54"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Glavni izbornik">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className={location.pathname === n.to ? "active" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="header-call">
            <a href={contact.tel}>
              <Phone />
              051 515 515
              <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            title={open ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilni izbornik">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
                <ArrowUpRight size={17} />
              </Link>
            ))}
            <Link to="/pohvale-i-prituzbe" onClick={() => setOpen(false)}>
              Pohvale i pritužbe
            </Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
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
                <img src={assets.whiteLogo.url} alt="Taxi Fiume" />
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
    </>
  );
}
export function PageIntro({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className={`page-intro ${image ? "with-image" : ""}`}>
      {image && <img className="page-intro-image" src={image} alt="Taxi Fiume vozilo u Rijeci" />}
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Naslovnica</Link>
          <span>/</span>
          <span>{title}</span>
        </div>
        <span className="eyebrow">TAXI FIUME · RIJEKA</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function CallBand() {
  return (
    <section className="call-band">
      <div className="container">
        <div>
          <span className="eyebrow">JEDAN POZIV. VAŠ TAXI.</span>
          <h2>Spremni za polazak?</h2>
          <p>Naručite svoje vozilo i uživajte u kvaliteti naših usluga.</p>
        </div>
        <Button asChild size="lg">
          <a href={contact.tel}>
            <Phone />
            Nazovite 051 515 515
            <ArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
