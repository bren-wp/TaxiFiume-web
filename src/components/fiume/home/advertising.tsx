import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HomeAdvertising() {
  return (
    <section className="advert-section">
      <div className="container">
        <span className="eyebrow">VAŠ BREND U POKRETU</span>
        <div className="advert-content">
          <h2>Želite postaviti svoju reklamu na naša taxi vozila?</h2>
          <div>
            <p>
              Želite postaviti svoju reklamu na naša taxi vozila? Nudimo mogućnost oglašavanja na
              vanjskoj površini vozila. Svaka oglasna reklama neprestano će biti vidljiva svim
              korisnicima prijevoza što je jedan od najboljih načina oglašavanja.
            </p>
            <p>
              Ukoliko ste zainteresirani možete poslati upit ili nas kontaktirati za detaljnije
              informacije.
            </p>
            <Button asChild size="lg">
              <Link to="/kontakt" search={{ tema: "Oglašavanje" }}>
                Javite nam se
                <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
