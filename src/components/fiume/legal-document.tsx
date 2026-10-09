import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";

const documents = [
  { to: "/impressum", label: "Impressum" },
  { to: "/pravila-privatnosti", label: "Pravila privatnosti" },
  { to: "/uvjeti-koristenja", label: "Uvjeti korištenja" },
  { to: "/politika-kolacica", label: "Politika kolačića" },
  { to: "/brisanje-korisnickog-racuna", label: "Brisanje korisničkog računa" },
  { to: "/brisanje-vozackog-racuna", label: "Brisanje vozačkog računa" },
] as const;

export function LegalDocument({ children, sections = [] }: {
  children: ReactNode;
  sections?: { id: string; title: string }[];
}) {
  const { pathname } = useLocation();
  return (
    <div className="container legal-layout">
      <nav className="legal-navigation" aria-label="Pravne informacije">
        <h2>Pravne informacije</h2>
        <ul>
          {documents.map((document) => (
            <li key={document.to}>
              <Link to={document.to} aria-current={pathname === document.to ? "page" : undefined}>
                {document.label}
              </Link>
            </li>
          ))}
        </ul>
        {sections.length > 1 && (
          <>
            <h2>Na ovoj stranici</h2>
            <ul className="legal-contents">
              {sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
              ))}
            </ul>
          </>
        )}
      </nav>
      <article className="legal-content">{children}</article>
    </div>
  );
}