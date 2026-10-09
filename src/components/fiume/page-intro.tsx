import { LocalPhoto } from "./local-photo";
import { Link } from "@tanstack/react-router";
export function PageIntro({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className={`page-intro ${image ? "with-image" : ""}`}>
      {image && (
        <LocalPhoto
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="page-intro-image"
          src={image}
          alt="Taxi Fiume vozilo u Rijeci"
        />
      )}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Putanja stranice">
          <Link to="/">Naslovnica</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <span className="eyebrow">TAXI FIUME · RIJEKA</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
