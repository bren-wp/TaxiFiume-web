import { assets } from "@/data/fiume/assets";
import { apps } from "@/data/fiume/contact";
export function AppLinks() {
  return (
    <div className="app-links">
      <a href={apps.play} target="_blank" rel="noreferrer">
        <img
          width="134"
          height="42"
          loading="lazy"
          decoding="async"
          src={assets.play.url}
          alt="Preuzmi na Google Play"
        />
      </a>
      <a href={apps.apple} target="_blank" rel="noreferrer">
        <img
          width="134"
          height="42"
          loading="lazy"
          decoding="async"
          src={assets.apple.url}
          alt="Preuzmi na App Store"
        />
      </a>
    </div>
  );
}
