// Only routes with an original content cover get a share photograph.
// Legal and text-only pages rely on the hosting preview rather than an unrelated image.
const photos: Record<string, { file: string; alt: string }> = {
  "/": { file: "naslovnica", alt: "Taxi Fiume vozila uz riječku rivu" },
  "/cjenik": { file: "cjenik", alt: "Taxi Fiume osobno vozilo u Rijeci" },
  "/vrste-vozila": { file: "vrste-prijevoza", alt: "Taxi Fiume vozila za prijevoz u Rijeci" },
  "/o-nama": { file: "o-nama", alt: "Taxi Fiume u Rijeci" },
  "/kontakt": { file: "kontakt", alt: "Taxi Fiume vozilo — kontakt i naručivanje prijevoza" },
  "/prijave-za-posao": { file: "posao", alt: "Taxi Fiume vozilo — posao taksista u Rijeci" },
};

export function socialImageMeta(path: string, publicSiteUrl?: string) {
  const photo = photos[path];
  if (!photo || !publicSiteUrl) return [];
  let origin: URL;
  try {
    origin = new URL(publicSiteUrl);
  } catch {
    return [];
  }
  if (origin.protocol !== "https:" || origin.username || origin.password) return [];
  const image = new URL(`/media/social/${photo.file}.jpg`, origin.origin).href;
  return [
    { property: "og:image", content: image },
    { property: "og:image:secure_url", content: image },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: photo.alt },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: photo.alt },
  ];
}