import { Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/fiume";
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
