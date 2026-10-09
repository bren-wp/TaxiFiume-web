type PageOptions = { path: string; business?: boolean };

import { structuredData } from "./structured-data";
export { businessSchema } from "./structured-data";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData(fullTitle, description, options.path)).replace(
          /</g,
          "\\u003c",
        ),
      },
    ],
  };
}
