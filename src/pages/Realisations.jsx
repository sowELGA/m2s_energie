import { Link } from "react-router-dom";
import { REALISATIONS } from "../data";

export default function Realisations() {
  return (
    <section className="bg-night pb-24 pt-36 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-display text-4xl font-black font-stretch-expanded md:text-6xl">Nos réalisations</h1>
        <p className="mt-5 max-w-xl text-lg text-white/70">
          Quelques chantiers réalisés par M2S ENERGY : installation, câblage, dépannage et éclairage.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REALISATIONS.map((r) => (
            <li key={r.title}>
              <figure>
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy to-navy-light ring-1 ring-white/10">
                  {r.image ? (
                    <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full place-items-center text-sm text-white/50">Photo à venir</div>
                  )}
                </div>
                <figcaption className="mt-4">
                  <strong className="block font-display text-lg font-extrabold font-stretch-expanded">{r.title}</strong>
                  <span className="text-white/60">{r.category}</span>
                </figcaption>
              </figure>
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
    </section>
  );
}