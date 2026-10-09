import { contact } from "@/data/fiume/contact";
import { services } from "@/data/fiume/services";

const businessId = "/#taxi-fiume";
const locationId = "/#location";
const contactId = "/#contact";
const websiteId = "/#website";
const catalogId = "/vrste-vozila#catalog";

const legalTopics: Record<string, string> = {
  "/pravila-privatnosti": "Zaštita osobnih podataka i privatnost",
  "/uvjeti-koristenja": "Uvjeti korištenja usluga",
  "/impressum": "Pravni podaci o pružatelju usluga",
  "/politika-kolacica": "Kolačići i privatnost web-stranice",
  "/brisanje-korisnickog-racuna": "Brisanje korisničkog računa i osobnih podataka",
  "/brisanje-vozackog-racuna": "Brisanje vozačkog računa i osobnih podataka",
};

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: "Rujevica 6",
    postalCode: "51000",
    addressLocality: "Rijeka",
    addressCountry: "HR",
  };
}

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    url: "/",
    name: "Taxi Fiume",
    legalName: "FIUME d.o.o.",
    telephone: contact.tel.replace("tel:", ""),
    email: contact.email,
    address: postalAddress(),
    location: { "@id": locationId },
    contactPoint: { "@id": contactId },
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: "Rijeka i okolica",
    hasOfferCatalog: { "@id": catalogId },
    sameAs: ["https://www.facebook.com/fiumetaxi/", "https://www.instagram.com/taxi_fiume/"],
  };
}

export function structuredData(title: string, description: string, path: string) {
  const { "@context": context, ...business } = businessSchema();
  const legalTopic = legalTopics[path];
  const isContact = path === "/kontakt";
  const isCatalog = ["/", "/vrste-vozila", "/cjenik"].includes(path);
  const page = {
    "@type": isContact ? "ContactPage" : path === "/o-nama" ? "AboutPage" : "WebPage",
    "@id": `${path}#webpage`,
    url: path,
    name: title,
    description,
    inLanguage: "hr",
    isPartOf: { "@id": websiteId },
    publisher: { "@id": businessId },
    about: legalTopic ? { "@type": "Thing", name: legalTopic } : { "@id": businessId },
    ...(isContact ? { mainEntity: { "@id": businessId } } : {}),
    ...(isCatalog ? { mainEntity: { "@id": catalogId } } : {}),
    ...(legalTopic ? { genre: "Pravne informacije" } : {}),
  };
  return {
    "@context": context,
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: "/",
        name: "Taxi Fiume",
        inLanguage: "hr",
        publisher: { "@id": businessId },
      },
      business,
      {
        "@type": "Place",
        "@id": locationId,
        name: "Taxi Fiume — Rijeka",
        address: postalAddress(),
        hasMap: "https://www.google.com/maps/search/?api=1&query=Rujevica+6+Rijeka",
      },
      {
        "@type": "ContactPoint",
        "@id": contactId,
        contactType: "customer service",
        telephone: contact.tel.replace("tel:", ""),
        email: contact.email,
        url: "/kontakt",
        availableLanguage: "hr",
        areaServed: "Rijeka i okolica",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Usluge Taxi Fiume",
        url: "/vrste-vozila",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@id": `/vrste-vozila#${service.id}` },
        })),
      },
      ...services.map((service) => ({
        "@type": ["gradski-taksi", "transferi"].includes(service.id) ? "TaxiService" : "Service",
        "@id": `/vrste-vozila#${service.id}`,
        url: `/vrste-vozila#${service.id}`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: { "@id": businessId },
        areaServed: "Rijeka i okolica",
      })),
      page,
    ],
  };
}