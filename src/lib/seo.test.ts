import { describe, expect, it } from "vitest";
import { businessSchema, pageHead } from "./seo";

describe("Search page identity", () => {
  it("keeps contact enquiries canonical to the contact page rather than the homepage", () => {
    const head = pageHead("Kontakt", "Kontakt Taxi Fiume", { path: "/kontakt" });
    expect(head.links).toEqual([{ rel: "canonical", href: "/kontakt" }]);
    expect(head.meta.find((tag) => "property" in tag && tag.property === "og:url")?.content).toBe(
      "/kontakt",
    );
  });
  it("uses the original local business contact details without fabricated ratings", () => {
    const business = businessSchema();
    expect(business.telephone).toBe("+38551515515");
    expect(business.email).toBe("taxi.fiume051@gmail.com");
    expect(business).not.toHaveProperty("aggregateRating");
  });
});
