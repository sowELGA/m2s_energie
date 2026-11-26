import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Bolt from "./Bolt";

const links = [
  { to: "/", key: "top", label: "Accueil" },
  { to: "/#services", key: "services", label: "Services" },
  { to: "/#lumiere", key: "lumiere", label: "Lumière" },
  { to: "/#methode", key: "methode", label: "Méthode" },
  { to: "/mediatheque", key: "mediatheque", label: "Médiathèque" },
];

// Sections de la page d'accueil, dans l'ordre (ce sont les id déjà présents)
const SECTIONS = ["top", "services", "lumiere", "methode", "contact"];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [section, setSection] = useState("top");

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Sur l'accueil : détecte la section qui occupe le milieu de l'écran
  useEffect(() => {
    if (pathname !== "/") return;
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setSection(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  const current = pathname === "/mediatheque" ? "mediatheque" : section;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 text-white transition-colors ${solid || open ? "bg-night/90 backdrop-blur" : ""}`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-display text-xl font-black font-stretch-expanded"
        >
          <Bolt className="h-6 text-brand" />
          M2S <span className="font-semibold text-white/60">ENERGY</span>
        </Link>

        <button
          className="rounded border border-white/30 px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer" : "Menu"}
        </button>

        <nav
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[72px] flex-col items-start gap-5 bg-night/95 px-6 pb-6 pt-2 md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0`}
        >
          {links.map((l) => {
            const active = current === l.key;
            return (
              <Link
                key={l.key}
                to={l.to}
                onClick={() => setOpen(false)}
                aria-current={
                  active
                    ? l.key ==="mediatheque"
                      ? "page"
                      : "location"
                    : undefined
                }
                className={`relative py-1 font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-brand after:transition-all ${
                  active
                    ? "text-white after:w-full"
                    : "text-white/70 after:w-0 hover:text-white hover:after:w-full"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
