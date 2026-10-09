import { Clock3, ShieldCheck, Wallet, MapPin } from "lucide-react";
export function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div>
          <Clock3 />
          <span>
            <strong>0–24</strong>Dostupni svaki dan
          </span>
        </div>
        <div>
          <Wallet />
          <span>
            <strong>5 km za 7 €</strong>Pristupačne cijene
          </span>
        </div>
        <div>
          <ShieldCheck />
          <span>
            <strong>Sigurno i udobno</strong>Vaše zadovoljstvo na prvom mjestu
          </span>
        </div>
        <div>
          <MapPin />
          <span>
            <strong>Rijeka i okolica</strong>Uvijek blizu vas
          </span>
        </div>
      </div>
    </section>
  );
}
