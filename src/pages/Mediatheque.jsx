import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MEDIA } from "../data";

const CATEGORIES = ["Tous", ...new Set(MEDIA.map((m) => m.category))];

export default function Mediatheque() {
  const [cat, setCat] = useState("Tous");
  const [open, setOpen] = useState(null);
  const items = cat === "Tous" ? MEDIA : MEDIA.filter((m) => m.category === cat);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, items.length]);

  const current = open !== null ? items[open] : null;

  return (
    <section className="bg-night pb-24 pt-36 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-display text-4xl font-black font-stretch-expanded md:text-6xl">Médiathèque</h1>
        <p className="mt-5 max-w-xl text-lg text-white/70">
          Nos chantiers en images : éclairage décoratif, installation, câblage.
        </p>

        <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Filtrer par catégorie">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              aria-pressed={c === cat}
              onClick={() => setCat(c)}
              className={`rounded-full border-2 px-5 py-2 font-semibold transition ${c === cat ? "border-transparent bg-brand text-ink" : "border-white/25 hover:border-white/60"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((m, i) => (
            <li key={m.src} className="mb-5 break-inside-avoid">
              <button
                onClick={() => setOpen(i)}
                aria-label={`Agrandir : ${m.title}`}
                className="group relative block w-full overflow-hidden ring-1 ring-white/10"
              >
                <img src={m.src} alt={m.title} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-4 text-left text-sm font-semibold opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  {m.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center gap-5 border-t border-white/15 pt-10">
          <p className="text-xl font-semibold">Vous avez un projet similaire ?</p>
          <Link to="/#contact" className="rounded-full bg-brand px-7 py-4 font-semibold text-ink hover:bg-brand-light">
            Demander un devis
          </Link>
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-40 grid place-items-center bg-night/95 p-4"
          onClick={() => setOpen(null)}
        >
          <button className="absolute right-4 top-4 rounded-full bg-white/10 px-5 py-2 font-semibold hover:bg-white/20" onClick={() => setOpen(null)}>
            Fermer
          </button>
          <button
            aria-label="Photo précédente"
            className="absolute left-3 top-1/2 size-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}
          >
            ‹
          </button>
          <button
            aria-label="Photo suivante"
            className="absolute right-3 top-1/2 size-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}
          >
            ›
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-full">
            <img src={current.src} alt={current.title} className="mx-auto max-h-[78vh] max-w-full object-contain" />
            <figcaption className="mt-3 text-center">
              <strong>{current.title}</strong> <span className="text-white/60">· {current.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}