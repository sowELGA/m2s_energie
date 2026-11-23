import { useEffect, useRef } from "react";
import { SITE } from "../data";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf = 0;
    let hovering = false;
    const set = (x, y) => {
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    // Sans curseur (mobile) ou au repos : la lumière se promène seule.
    const tick = (t) => {
      const r = el.getBoundingClientRect();
      if (!hovering && r.bottom > 0) {
        const s = t / 1800;
        set(
          r.width * (0.5 + 0.3 * Math.sin(s)),
          r.height * (0.6 + 0.2 * Math.sin(s * 1.6 + 1)),
        );
      }
      raf = requestAnimationFrame(tick);
    };
    const move = (e) => {
      hovering = true;
      const r = el.getBoundingClientRect();
      set(e.clientX - r.left, e.clientY - r.top);
    };
    const leave = () => {
      hovering = false;
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    if (!reduce) raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  const letters =
    "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[12%] select-none whitespace-nowrap font-display text-[min(30vw,30rem)] font-black leading-none font-stretch-expanded";

  return (
    <section
      ref={ref}
      id="top"
      className="beam-root relative flex min-h-svh items-center overflow-hidden bg-night text-white"
    >
      <div aria-hidden="true" className="glow absolute inset-0" />
      <div
        aria-hidden="true"
        className="grid-lines absolute inset-0 text-white/[.05]"
      />
      <div
        aria-hidden="true"
        className="beam grid-lines absolute inset-0 text-brand/60"
      />
      <div aria-hidden="true" className={`${letters} letters-dim`}>
        M2S
      </div>
      <div aria-hidden="true" className={`${letters} letters-lit beam`}>
        M2S
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-40 pt-32 md:pb-56">
        <h1 className="max-w-4xl font-display text-[clamp(2.3rem,6vw,5rem)] font-black leading-[1] font-stretch-expanded">
          Du courant, de la lumière, du travail propre.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/75">
          M2S ENERGY installe, câble, dépanne et met en lumière vos bâtiments.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand px-7 py-4 font-semibold text-ink hover:bg-brand-light"
          >
            Demander un devis
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/40 px-7 py-3.5 font-semibold hover:border-white hover:bg-white hover:text-night"
          >
            Nous contacter sur WhatsApp
          </a>
        </div>
        <p className="mt-10 hidden text-sm text-white/50 pointer-fine:block">
          Déplacez la souris : la lumière vous suit.
        </p>
      </div>
    </section>
  );
}
