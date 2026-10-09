import { Link } from "@tanstack/react-router";
import { ArrowDownRight } from "lucide-react";
import { services } from "@/data/fiume";

export function ServiceNavigation() {
  return (
    <nav className="service-navigation" aria-label="Vrste prijevoza na ovoj stranici">
      <ul className="container">
        {services.map((service, index) => (
          <li key={service.id}>
            <Link to="/vrste-vozila" hash={service.id}>
              <span className="service-navigation-number" aria-hidden="true">0{index + 1}</span>
              <span>{service.title}</span>
              <ArrowDownRight size={20} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}