import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { SiteLayout, PageIntro } from "@/components/fiume/layout";
import { ContactForm } from "@/components/fiume/contact-form";
import { assets, contact, pageHead } from "@/data/fiume";
export const Route = createFileRoute("/prijave-za-posao")({
  head: () =>
    pageHead(
      "Prijava za posao",
      "Pridružite se timu profesionalnih taksista Taxi Fiume u Rijeci. Pripremite svoju prijavu za posao.",
    ),
  component: Jobs,
});
function Jobs() {
  return (
    <SiteLayout>
      <PageIntro
        title="Prijava za posao"
        description="Tražite dinamičan posao? Pridružite se našem timu profesionalnih taksista!"
        image={assets.city.url}
      />
      <section className="section">
        <div className="container content-grid">
          <aside className="contact-aside">
            <span className="eyebrow">VAŠE NOVO POSLOVNO PUTOVANJE</span>
            <h2>
              Pridružite se
              <br />
              našem timu.
            </h2>
            <p>
              Kao taksist imat ćete priliku upoznati nove ljude, istražiti svoj grad i pružiti
              vrhunsku uslugu korisnicima kojima je potreban pouzdan prijevoz. Prijavite se danas i
              započnite svoje poslovno putovanje!
            </p>
            <div className="contact-info">
              <a href={contact.tel}>
                <Phone />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail />
                <span>{contact.email}</span>
              </a>
            </div>
          </aside>
          <ContactForm kind="job" />
        </div>
      </section>
    </SiteLayout>
  );
}
