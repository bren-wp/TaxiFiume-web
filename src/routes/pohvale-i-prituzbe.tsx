import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/fiume/layout";
import { ContactForm } from "@/components/fiume/contact-form";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/pohvale-i-prituzbe")({
  head: () =>
    pageHead(
      "Pohvale i pritužbe",
      "Podijelite svoje iskustvo s Taxi Fiume. Vaše pohvale, pritužbe i prijedlozi pomažu nam poboljšati kvalitetu prijevoza.",
      { path: "/pohvale-i-prituzbe" },
    ),
  component: Feedback,
});
function Feedback() {
  return (
    <SiteLayout>
      <PageIntro title="Pohvale i pritužbe" description="Vaše iskustvo nam je važno." />
      <section className="section">
        <div className="container content-grid">
          <div className="contact-aside">
            <span className="eyebrow">SLUŠAMO VAS</span>
            <h2>
              Vaše mišljenje.
              <br />
              Naša bolja usluga.
            </h2>
            <p>
              Ukoliko ste s našim radom zadovoljni — pohvalite nas, ukoliko niste — upozorite nas na
              naše greške. Naša želja je da poboljšamo kvalitetu naše usluge i samim tim
              zadovoljstvo naših putnika.
            </p>
            <p>
              Pisane prigovore možete poslati na taxi.fiume051@gmail.com. Odgovor dajemo u pisanom
              obliku najkasnije 15 dana od primitka prigovora.
            </p>
          </div>
          <ContactForm kind="feedback" />
        </div>
      </section>
    </SiteLayout>
  );
}
