type PageOptions = { path: string; business?: boolean };

import { contact } from "@/data/fiume/contact";

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Taxi Fiume",
    legalName: "FIUME d.o.o.",
    telephone: contact.tel.replace("tel:", ""),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rujevica 6",
      postalCode: "51000",
      addressLocality: "Rijeka",
      addressCountry: "HR",
    },
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: "Rijeka i okolica",
    sameAs: ["https://www.facebook.com/fiumetaxi/", "https://www.instagram.com/taxi_fiume/"],
  };
}

export function pageHead(title: string, description: string, options: PageOptions) {
  const fullTitle = `${title} | Taxi Fiume`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "hr_HR" },
      { property: "og:url", content: options.path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: options.path }],
    scripts: options.business
      ? [{ type: "application/ld+json", children: JSON.stringify(businessSchema()) }]
      : [],
  };
}
