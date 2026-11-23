import { STEPS } from "../data";

export default function Process() {
  return (
    <section id="methode" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-display text-4xl font-black text-navy font-stretch-expanded md:text-6xl">
          Simple, du premier appel à la fin du chantier.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, n) => (
            <li key={s.t} className="border-t-4 border-brand pt-6">
              <span className="outline-navy font-display text-7xl font-black font-stretch-expanded">{n + 1}</span>
              <h3 className="mt-4 font-display text-xl font-extrabold text-navy font-stretch-expanded">{s.t}</h3>
              <p className="mt-2 text-ink/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
