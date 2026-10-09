const localAsset = (filename: string) => ({ url: `/media/${filename}` });
export const assets = {
  city: localAsset("H-i301.webp"),
  hero: localAsset("H-i303.webp"),
  rijeka: localAsset("H-i302.webp"),
  van: localAsset("kombi2.webp"),
  transfer: localAsset("skoda-superb-2.webp"),
  rental: localAsset("slike-kombija.webp"),
  interior: localAsset("03-full.webp"),
  small: localAsset("up.webp"),
  rear: localAsset("01-full.webp"),
  logo: localAsset("taxi-fiume.svg"),
  whiteLogo: localAsset("taxi-fiume-white.svg"),
  play: localAsset("image-1.webp"),
  apple: localAsset("image-2.webp"),
  pricePdf: localAsset("Cjenik_usluga.pdf"),
};
export const formatEuro = (value: number) => `${value.toFixed(2).replace(".", ",")} €`;
export const contact = {
  phone: "051 515 515",
  tel: "tel:+38551515515",
  email: "taxi.fiume051@gmail.com",
  address: "Rujevica 6, 51000 Rijeka",
};
export const apps = {
  play: "https://play.google.com/store/apps/details?id=com.taxifiume.customer",
  apple: "https://apps.apple.com/hr/app/taxi-fiume/id6801137953?l=hr",
};
export const rates = {
  cityStart: 7,
  cityKm: 1.4,
  vanStart: 14,
  vanKm: 2.5,
  waiting: 15,
  rental: 79.5,
};
export const services = [
  {
    id: "gradski-taksi",
    title: "Gradski taksi",
    topic: "Opći upit",
    label: "RIJEKA I OKOLICA",
    image: assets.city.url,
    description: "Najpovoljniji i najpouzdaniji taxi na području Riječkog prstena, dostupan 0–24.",
  },
  {
    id: "kombi-prijevoz",
    title: "Kombi prijevoz",
    topic: "Kombi prijevoz",
    label: "VIŠE MJESTA, VIŠE UDOBNOSTI",
    image: assets.van.url,
    description:
      "Siguran i udoban prijevoz putnika novim, bogato opremljenim vozilima Opel Vivaro najnovije generacije.",
  },
  {
    id: "transferi",
    title: "Transferi",
    topic: "Transfer",
    label: "VAŠE ODREDIŠTE, NAŠA BRIGA",
    image: assets.transfer.url,
    description:
      "Transferi od i do zračnih luka, kolodvora, hotela te na poslovna i međugradska putovanja.",
  },
  {
    id: "rent-a-car",
    title: "Rent a car",
    topic: "Rent a car",
    label: "SLOBODA NA ČETIRI KOTAČA",
    image: assets.rental.url,
    description:
      "Fleksibilne opcije najma, povoljne cijene i pouzdana usluga. Opel Vivaro već od 79,50 € na dan.",
  },
];
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Taxi Fiume` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Taxi Fiume` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
