import { SiteLayout, PageIntro } from "./layout";
import legal from "@/data/legal.json";
import { contact } from "@/data/fiume";
type Key = keyof typeof legal;
export function LegalPage({ slug, title }: { slug: Key; title: string }) {
  return (
    <SiteLayout>
      <PageIntro title={title} description="Taxi Fiume · Informacije i pravne obavijesti" />
      <article className="container legal-content">
        {legal[slug].map((block, i) =>
          block.type === "heading" ? (
            <h2 key={i}>{block.text}</h2>
          ) : block.type === "list" ? (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{block.text}</p>
          ),
        )}
        <p>
          Kontakt: <a href={`mailto:${contact.email}`}>{contact.email}</a> ·{" "}
          <a href={contact.tel}>{contact.phone}</a>
        </p>
      </article>
    </SiteLayout>
  );
}
