import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/fiume/layout";
import { pageHead } from "@/lib/seo";
import { HomeHero } from "@/components/fiume/home/hero";
import { TrustStrip } from "@/components/fiume/home/trust-strip";
import { HomeServices } from "@/components/fiume/home/services";
import { HomeAbout } from "@/components/fiume/home/about";
import { HomeApp } from "@/components/fiume/home/app";
import { HomeAdvertising } from "@/components/fiume/home/advertising";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Taxi Rijeka, transferi i kombi prijevoz 0–24",
      "Taxi Fiume — gradski taxi, kombi prijevoz, transferi i rent a car u Rijeci. Prvih 5 km za 7 €. Nazovite 051 515 515.",
      { path: "/", business: true },
    ),
  component: Home,
});
function Home() {
  return (
    <SiteLayout>
      <HomeHero />
      <TrustStrip />
      <HomeServices />
      <HomeAbout />
      <HomeApp />
      <HomeAdvertising />
    </SiteLayout>
  );
}
