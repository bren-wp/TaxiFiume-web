import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/fiume";
export function ContactForm({
  kind = "contact",
  topic = "",
}: {
  kind?: "contact" | "job" | "feedback";
  topic?: string;
}) {
  const [draft, setDraft] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject =
      kind === "job"
        ? "Prijava za posao"
        : kind === "feedback"
          ? String(f.get("category"))
          : String(f.get("topic") || "Kontakt upit");
    const body = [
      `Ime i prezime: ${f.get("name")}`,
      `E-mail: ${f.get("email")}`,
      `Telefon: ${f.get("phone") || "—"}`,
      kind === "job" ? `Adresa: ${f.get("address") || "—"}` : "",
      kind === "feedback" ? `Vozilo: ${f.get("vehicle") || "—"}` : "",
      "",
      String(f.get("message")),
      kind === "job" ? "\nŽivotopis priložite ovoj poruci prije slanja." : "",
    ]
      .filter(Boolean)
      .join("\n");
    setDraft(
      `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <form className="message-form" onSubmit={submit} onChange={() => setDraft("")}>
      <div className="form-pair">
        <label>
          Ime i prezime *
          <input name="name" autoComplete="name" required placeholder="Vaše ime i prezime" />
        </label>
        <label>
          E-mail *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="vas@email.com"
          />
        </label>
      </div>
      <label>
        Telefon {kind === "job" ? "*" : ""}
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required={kind === "job"}
          placeholder="Vaš broj telefona"
        />
      </label>
      {kind === "job" && (
        <label>
          Adresa
          <input
            name="address"
            autoComplete="street-address"
            placeholder="Ulica i kućni broj, grad"
          />
        </label>
      )}
      {kind === "contact" && (
        <label>
          Tema upita
          <select name="topic" defaultValue={topic || "Opći upit"}>
            {["Opći upit", "Transfer", "Kombi prijevoz", "Rent a car", "Oglašavanje"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      )}
      {kind === "feedback" && (
        <>
          <label>
            Vrsta poruke
            <select name="category">
              <option>Pohvala</option>
              <option>Pritužba</option>
              <option>Prijedlog</option>
            </select>
          </label>
          <label>
            Broj vozila ili registracijska oznaka (nije obavezno)
            <input name="vehicle" placeholder="Npr. RI 1234 AB" />
          </label>
        </>
      )}
      <label>
        Vaša poruka *
        <textarea name="message" required placeholder="Kako vam možemo pomoći?" rows={6} />
      </label>
      {kind === "job" && <p className="form-notice">Životopis priložite e-mailu prije slanja.</p>}
      <label className="consent">
        <input type="checkbox" required />
        <span>
          Slažem se i prihvaćam <Link to="/pravila-privatnosti">pravila privatnosti</Link>. *
        </span>
      </label>
      <Button type="submit" size="lg" className="justify-self-start">
        <Mail />
        Pripremite e-mail
        <ArrowUpRight />
      </Button>
      <p className="form-notice">
        Poruka se šalje putem vaše aplikacije za e-mail. Ovdje se ne pohranjuju uneseni podaci.
      </p>
      {draft && (
        <div className="form-success">
          Vaša poruka je pripremljena. <a href={draft}>Otvorite e-mail i pošaljite poruku ↗</a>
        </div>
      )}
    </form>
  );
}
