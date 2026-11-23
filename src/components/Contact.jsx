import { useState } from "react";
import { SITE, SERVICES } from "../data";
import {
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  TikTokIcon,
  InstagramIcon,
} from "./Icons";

const field =
  "rounded-lg border-2 border-transparent bg-white px-4 py-3 text-ink focus:border-navy focus:outline-none";

const contacts = [
  {
    label: "Téléphone",
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}`,
    Icon: WhatsAppIcon,
  },
  { label: "E-mail", href: `mailto:${SITE.email}`, Icon: MailIcon },
  { label: "TikTok", href: SITE.tiktok, Icon: TikTokIcon },
  { label: "Instagram", href: SITE.instagram, Icon: InstagramIcon },
];

export default function Contact() {
  const [f, setF] = useState({
    nom: "",
    tel: "",
    service: SERVICES[0].title,
    msg: "",
  });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const text =
      `Bonjour M2S ENERGY, je souhaite un devis.\n\n` +
      `Nom : ${f.nom}\nTéléphone : ${f.tel}\nService : ${f.service}\nMessage : ${f.msg}`;
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
  };

  return (
    <section
      id="contact"
      className="bg-brand pb-20 pt-28 text-ink [clip-path:polygon(0_6vw,100%_0,100%_100%,0_100%)] md:pb-28 md:pt-40"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="font-display text-4xl font-black font-stretch-expanded md:text-6xl">
            Un projet ? Une panne ?
          </h2>
          <p className="mt-5 max-w-md text-lg">
            Décrivez votre besoin. Nous vous répondons avec un devis.
          </p>
          <div className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {contacts.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="grid size-14 place-items-center rounded-full bg-night text-white transition hover:-translate-y-1 hover:bg-white hover:text-night"
                  >
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5">{SITE.zone}</p>
          </div>
        </div>
        <form onSubmit={send} className="grid gap-4">
          <label className="grid gap-1.5 font-semibold">
            Nom
            <input
              required
              value={f.nom}
              onChange={set("nom")}
              className={field}
            />
          </label>
          <label className="grid gap-1.5 font-semibold">
            Téléphone
            <input
              required
              type="tel"
              value={f.tel}
              onChange={set("tel")}
              className={field}
            />
          </label>
          <label className="grid gap-1.5 font-semibold">
            Service
            <select
              value={f.service}
              onChange={set("service")}
              className={field}
            >
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 font-semibold">
            Message
            <textarea
              required
              value={f.msg}
              onChange={set("msg")}
              className={`${field} min-h-32 resize-y`}
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-night px-7 py-4 font-semibold text-white hover:bg-navy"
          >
            Envoyer sur WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
