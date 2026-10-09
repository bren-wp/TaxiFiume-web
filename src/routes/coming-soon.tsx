import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageIntro } from "@/components/fiume/layout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/coming-soon")({
  head: () =>
    pageHead(
      "Uskoro",
      "Taxi Fiume — uskoro nove informacije. Posjetite naslovnicu za sve usluge i kontakt.",
      { path: "/coming-soon" },
    ),
  component: () => (
    <SiteLayout>
      <PageIntro title="Taxi Fiume" description="Coming soon…" />
      <section className="section">
        <div className="container">
          <Button asChild>
            <Link to="/">Povratak na naslovnicu</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  ),
});
