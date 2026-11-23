import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bolt from "./Bolt";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/#lumiere", label: "Lumière" },
  { href: "/#methode", label: "Méthode" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-30 text-white transition-colors ${solid || open ? "bg-night/90 backdrop-blur" : ""}`}>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link to="/#top" className="flex items-center gap-2 font-display text-xl font-black font-stretch-expanded">
          <Bolt className="h-6 text-brand" />
          M2S <span className="font-semibold text-white/60">ENERGY</span>
        </Link>
        <button className="rounded border border-white/30 px-3 py-2 text-sm md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Fermer" : "Menu"}
        </button>
        <nav className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[72px] flex-col items-start gap-5 bg-night/95 px-6 pb-6 pt-2 md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0`}>
          {links.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="font-medium text-white/80 hover:text-brand">
              {l.label}
            </Link>
          ))}
          <Link to="/#contact" onClick={() => setOpen(false)} className="rounded-full bg-brand px-5 py-2.5 font-semibold text-ink hover:bg-brand-light">
            Devis gratuit
          </Link>
        </nav>
      </div>
    </header>
  );
}