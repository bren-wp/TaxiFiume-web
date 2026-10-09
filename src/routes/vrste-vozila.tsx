import { ServiceDetail } from "@/components/fiume/service-detail";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CallBand } from "@/components/fiume/layout";
import { assets, services, pageHead } from "@/data/fiume";
export const Route = createFileRoute("/vrste-vozila")({
  head: () =>
    pageHead(
      "Taxi, kombi prijevoz, transferi i rent a car u Rijeci",
      "Gradski taksi, kombi prijevoz, transferi i rent a car u Rijeci. Upoznajte vozila i sve usluge Taxi Fiume.",
      { path: "/vrste-vozila" },
    ),
  component: Services,
});
function Services() {
  return (
    <SiteLayout>
      <PageIntro
        title="Vrste prijevoza"
        description="Nudimo više vrsta prijevoza kako bismo zadovoljili sve vaše potrebe."
        image={assets.hero.url}
      />
      {services.map((s, i) => (
        <ServiceDetail key={s.id} service={s} index={i} />
      ))}
      <CallBand />
    </SiteLayout>
  );
}
