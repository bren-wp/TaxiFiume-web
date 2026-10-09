import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, contact } from "@/data/fiume";
import { nav } from "@/data/fiume/navigation";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <Link
          to="/"
          aria-label="Taxi Fiume naslovnica"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <img
            className="brand-wordmark"
            src={assets.logo.url}
            alt="Taxi Fiume"
            width="172"
            height="54"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Glavni izbornik">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={location.pathname === n.to ? "active" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-call">
          <a href={contact.tel} aria-label="Nazovite Taxi Fiume: 051 515 515">
            <Phone />
            <span>051 515 515</span>
            <ArrowUpRight />
          </a>
        </Button>
        <Button
          ref={menuRef}
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          title={open ? "Zatvori izbornik" : "Otvori izbornik"}
          aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilni izbornik">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              aria-current={location.pathname === n.to ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
              <ArrowUpRight size={17} />
            </Link>
          ))}
          <Link to="/pohvale-i-prituzbe" onClick={() => setOpen(false)}>
            Pohvale i pritužbe
          </Link>
        </nav>
      )}
    </header>
  );
}
