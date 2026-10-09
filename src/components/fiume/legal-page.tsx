import { SiteLayout, PageIntro } from "./layout";
import type { LegalBlock } from "@/data/legal/types";
import { contact } from "@/data/fiume";
import { LegalDocument } from "./legal-document";
export function LegalPage({ blocks, title }: { blocks: LegalBlock[]; title: string }) {
  return (
    <SiteLayout>
      <PageIntro title={title} description="Taxi Fiume · Informacije i pravne obavijesti" />
      <LegalDocument sections={blocks.flatMap((block, i) => block.type === "heading" ? [{ id: `odjeljak-${i}`, title: block.text }] : [])}>
        {blocks.map((block, i) =>
          block.type === "heading" ? (
            <h2 key={i} id={`odjeljak-${i}`}>{block.text}</h2>
          ) : block.type === "list" ? (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            block.text === title && i === 0 ? null : <p key={i}>{block.text}</p>
          ),
        )}
        <p>
          Kontakt: <a href={`mailto:${contact.email}`}>{contact.email}</a> ·{" "}
          <a href={contact.tel}>{contact.phone}</a>
        </p>
      </LegalDocument>
    </SiteLayout>
  );
}
