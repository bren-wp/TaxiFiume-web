import { MapPin, CarFront, ShieldCheck } from "lucide-react";
import { AppLinks } from "../app-links";
export function HomeApp() {
  return (
    <section className="app-section">
      <div className="container app-grid">
        <div>
          <span className="eyebrow">TAXI FIUME APLIKACIJA</span>
          <h2>
            Vaš taxi.
            <br />
            Na vašem dlanu.
          </h2>
          <p>
            Od sada naruči svoj Taxi Fiume i preko Android ili iOS mobilne aplikacije te prati gdje
            se točno tvoj taxi nalazi.
          </p>
          <AppLinks />
        </div>
        <div className="app-steps">
          <div>
            <span>01</span>
            <div>
              <h3>Naručite svoju vožnju</h3>
              <p>Odaberite lokaciju preuzimanja u aplikaciji.</p>
            </div>
            <MapPin />
          </div>
          <div>
            <span>02</span>
            <div>
              <h3>Pratite dolazak vozila</h3>
              <p>Znajte gdje je vaš taxi u stvarnom vremenu.</p>
            </div>
            <CarFront />
          </div>
          <div>
            <span>03</span>
            <div>
              <h3>Uživajte u vožnji</h3>
              <p>Do vašeg odredišta sigurno i bez brige.</p>
            </div>
            <ShieldCheck />
          </div>
        </div>
      </div>
    </section>
  );
}
