import { Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "./components/Header";
import Bolt from "./components/Bolt";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Realisations from "./pages/Realisations";
import { SITE } from "./data";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 bg-night py-8 text-sm text-white/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6">
          <span className="flex items-center gap-2 font-display font-extrabold text-white font-stretch-expanded">
            <Bolt className="h-4 text-brand" /> {SITE.name}
          </span>
          <span className="flex flex-wrap gap-5">
            <Link to="/realisations" className="hover:text-brand">Réalisations</Link>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand">TikTok</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Instagram</a>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
          </span>
        </div>
      </footer>
    </>
  );
}