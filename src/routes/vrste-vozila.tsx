import { ServiceDetail } from "@/components/fiume/service-detail";
import { ServiceNavigation } from "@/components/fiume/service-navigation";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageIntro, CallBand } from "@/components/fiume/layout";
import { assets, services } from "@/data/fiume";
import { pageHead } from "@/lib/seo";
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
      <ServiceNavigation />
      {services.map((s, i) => (
        <ServiceDetail key={s.id} service={s} index={i} />
      ))}
      <CallBand />
    </SiteLayout>
  );
}
