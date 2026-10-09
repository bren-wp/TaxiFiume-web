import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { SiteLayout, PageIntro } from "@/components/fiume/layout";
import { ContactForm } from "@/components/fiume/contact-form";
import { assets, contact, pageHead } from "@/data/fiume";
export const Route = createFileRoute("/kontakt")({
  validateSearch: (search: Record<string, unknown>) =>
    typeof search["tema"] === "string" ? { tema: search["tema"] } : {},
  head: () =>
    pageHead(
      "Kontakt",
      "Kontaktirajte Taxi Fiume na 051 515 515 ili taxi.fiume051@gmail.com. Dostupni smo 24 sata dnevno, 7 dana u tjednu.",
    ),
  component: Contact,
});
function Contact() {
  const { tema } = Route.useSearch();
  return (
    <SiteLayout>
      <PageIntro
        title="Kontakt"
        description="Imate pitanja za nas ili vam je potrebna dodatna informacija? Slobodno nam se javite."
        image={assets.rear.url}
      />
      <section className="section">
        <div className="container content-grid">
          <aside className="contact-aside">
            <span className="eyebrow">TU SMO ZA VAS</span>
            <h2>Razgovarajmo.</h2>
            <p>
              Za naručivanje vozila nazovite nas. Za sve ostale informacije pripremite e-mail ili
              nam se javite izravno.
            </p>
            <div className="contact-info">
              <a href={contact.tel}>
                <Phone />
                <span>
                  <small>Naručite taxi</small>
                  {contact.phone}
                </span>
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail />
                <span>
                  <small>Pišite nam</small>
                  {contact.email}
                </span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rujevica+6+Rijeka"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin />
                <span>
                  <small>FIUME d.o.o.</small>
                  {contact.address}
                </span>
              </a>
              <a href={contact.tel}>
                <Clock3 />
                <span>
                  <small>Radno vrijeme</small>0–24 · 7 dana u tjednu
                </span>
              </a>
            </div>
          </aside>
          <ContactForm topic={tema ?? ""} />
        </div>
      </section>
    </SiteLayout>
  );
}
