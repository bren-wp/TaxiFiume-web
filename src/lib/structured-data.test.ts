import { describe, expect, it } from "vitest";
import { structuredData } from "./structured-data";
import { pageHead } from "./seo";

describe("Linked Schema.org data", () => {
  it("identifies taxi services separately from rental and passenger transport", () => {
    const graph = structuredData("Usluge", "Prijevoz", "/vrste-vozila")["@graph"];
    expect(graph.find((node) => node["@id"] === "/vrste-vozila#gradski-taksi")?.["@type"]).toBe(
      "TaxiService",
    );
    expect(graph.find((node) => node["@id"] === "/vrste-vozila#rent-a-car")?.["@type"]).toBe(
      "Service",
    );
    expect(graph.filter((node) => ["TaxiService", "Service"].includes(node["@type"]))).toHaveLength(
      4,
    );
  });
  it("connects the contact page to the business and factual location", () => {
    const graph = structuredData("Kontakt", "Kontakt", "/kontakt")["@graph"];
    expect(graph.at(-1)).toMatchObject({
      "@type": "ContactPage",
      mainEntity: { "@id": "/#taxi-fiume" },
    });
    expect(graph.find((node) => node["@type"] === "Place")).toMatchObject({
      address: { streetAddress: "Rujevica 6", postalCode: "51000", addressLocality: "Rijeka" },
    });
    expect(graph.find((node) => node["@type"] === "ContactPoint")).toMatchObject({
      telephone: "+38551515515",
      email: "taxi.fiume051@gmail.com",
    });
  });
  it.each([
    "/pravila-privatnosti",
    "/uvjeti-koristenja",
    "/impressum",
    "/politika-kolacica",
    "/brisanje-korisnickog-racuna",
    "/brisanje-vozackog-racuna",
  ])("describes %s as a legal web page, not legislation", (path) => {
    expect(structuredData("Pravni dokument", "Informacije", path)["@graph"].at(-1)).toMatchObject({
      "@type": "WebPage",
      url: path,
      genre: "Pravne informacije",
      about: { "@type": "Thing" },
      publisher: { "@id": "/#taxi-fiume" },
    });
  });
  it("resolves every graph reference to a declared node", () => {
    const data = structuredData("Taxi Fiume", "Usluge", "/");
    const ids = new Set(data["@graph"].map((node) => node["@id"]));
    const check = (value: unknown) => {
      if (!value || typeof value !== "object") return;
      if ("@id" in value) expect(ids.has(String(value["@id"]))).toBe(true);
      Object.values(value).forEach(check);
    };
    check(data);
  });
  it("safely serializes supplied text in the JSON-LD head script", () => {
    const script = pageHead("</script>", "Opis", { path: "/" }).scripts[0];
    expect(script.children).not.toContain("</script>");
    expect(JSON.parse(script.children)["@graph"].at(-1).name).toContain("</script>");
  });
});
