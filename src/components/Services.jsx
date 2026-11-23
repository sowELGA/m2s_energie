import { SERVICES } from "../data";
import Bolt from "./Bolt";
import Pic from "./Pic";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl font-display text-4xl font-black text-navy font-stretch-expanded md:text-6xl">
          Tout ce qui touche à l’électricité de votre bâtiment.
        </h2>
        <ul className="relative mt-14 border-t border-navy/15">
          <span aria-hidden="true" className="absolute bottom-0 left-3 top-0 w-px bg-navy/25" />
          {SERVICES.map((s) => (
            <li key={s.title} className="group relative border-b border-navy/15 py-7 pl-12 md:py-9">
              <span className="absolute left-0 top-8 grid size-6 place-items-center rounded-full bg-paper text-navy ring-2 ring-navy/30 transition group-hover:bg-brand group-hover:text-ink group-hover:ring-brand md:top-10">
                <Bolt className="h-3" />
              </span>
              <div className={`grid items-center gap-3 md:gap-10 ${s.img ? "md:grid-cols-[1.1fr_1fr_9rem]" : "md:grid-cols-[1.1fr_1fr]"}`}>
                <h3 className="font-display text-2xl font-extrabold text-navy transition group-hover:translate-x-2 font-stretch-expanded md:text-4xl">
                  {s.title}
                </h3>
                <p className="text-ink/70">{s.text}</p>
                {s.img && (
                  <div className="hidden h-24 overflow-hidden md:block">
                    <Pic id={s.img} alt={s.title} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
