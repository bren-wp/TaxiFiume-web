import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/fiume";
export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Brzi kontakt">
      <Button asChild size="lg">
        <a href={contact.tel}>
          <Phone />
          Nazovite taxi
        </a>
      </Button>
      <Button asChild size="lg" variant="outline">
        <Link to="/kontakt">
          <Mail />
          Pošaljite upit
        </Link>
      </Button>
    </nav>
  );
}
