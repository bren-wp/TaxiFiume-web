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
