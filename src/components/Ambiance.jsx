import { useState } from "react";
import { SCENES } from "../data";

const stop = { stopColor: "var(--lamp)" };

export default function Ambiance() {
  const [i, setI] = useState(0);
  const scene = SCENES[i];

  return (
    <section id="lumiere" className="bg-night py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-4xl font-black font-stretch-expanded md:text-6xl">
            La lumière change tout.
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Décoration intérieure en lumière : choisissez une ambiance et voyez la différence. Nous concevons et installons l’éclairage qui correspond à votre lieu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Choisir une ambiance">
            {SCENES.map((s, n) => (
              <button
                key={s.name}
                aria-pressed={n === i}
                onClick={() => setI(n)}
                className={`flex items-center gap-2 rounded-full border-2 px-5 py-2.5 font-semibold transition ${n === i ? "border-transparent bg-white text-night" : "border-white/25 hover:border-white/60"}`}
              >
                <span className="size-3 rounded-full" style={{ background: s.color }} />
                {s.name}
              </button>
            ))}
          </div>
          <p className="mt-6 min-h-12 max-w-md text-white/80" aria-live="polite">
            <strong className="text-white">{scene.temp}.</strong> {scene.text}
          </p>
        </div>

        <div className="room overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ "--lamp": scene.color }}>
          <svg viewBox="0 0 400 300" className="block w-full" role="img" aria-label={`Pièce éclairée en ambiance ${scene.name}`}>
            <defs>
              <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" style={stop} stopOpacity=".85" />
                <stop offset="1" style={stop} stopOpacity="0" />
              </linearGradient>
              <radialGradient id="pool">
                <stop offset="0" style={stop} stopOpacity=".6" />
                <stop offset="1" style={stop} stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="300" fill="#0E1B38" />
            <rect y="236" width="400" height="64" fill="#091226" />
            <ellipse cx="200" cy="248" rx="190" ry="34" fill="url(#pool)" />
            <polygon points="182,74 218,74 340,244 60,244" fill="url(#cone)" />
            <line x1="200" y1="0" x2="200" y2="54" stroke="#5B6B8F" />
            <path d="M166 76 Q200 40 234 76Z" fill="#1F3A6B" />
            <ellipse cx="200" cy="77" rx="18" ry="5" style={{ fill: "var(--lamp)" }} />
            <rect x="118" y="196" width="164" height="42" rx="10" fill="#1A2B52" />
            <rect x="130" y="168" width="140" height="36" rx="10" fill="#223565" />
            <rect x="322" y="206" width="24" height="32" rx="3" fill="#1A2B52" />
            <circle cx="334" cy="196" r="17" fill="#1D4D4A" />
            <rect x="40" y="90" width="64" height="5" fill="#223565" />
            <rect x="40" y="130" width="64" height="5" fill="#223565" />
          </svg>
        </div>
      </div>
    </section>
  );
}
