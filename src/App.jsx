import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Ambiance from "./components/Ambiance";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Bolt from "./components/Bolt";
import { SITE } from "./data";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Ambiance />
        <Process />
        <Contact />
      </main>
      <footer className="bg-night py-8 text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6">
          <span className="flex items-center gap-2 font-display font-extrabold text-white font-stretch-expanded">
            <Bolt className="h-4 text-brand" /> {SITE.name}
          </span>
          <span>© {new Date().getFullYear()} {SITE.name}. Électricité bâtiment.</span>
        </div>
      </footer>
    </>
  );
}
