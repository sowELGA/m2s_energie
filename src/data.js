// ====== À MODIFIER ======
export const SITE = {
  name: "M2S ENERGY",
  phone: "+221 78 526 91 04",
  whatsapp: "221785269104",
  email: "mamadouseydous13@gmail.com",
  tiktok: "https://www.tiktok.com/@m2senergy",
  instagram: "https://www.instagram.com/m2s_energy",
  zone: "Zone d’intervention à compléter",
};

// img : ID d'une photo Pexels (le nombre à la fin de l'URL pexels.com/…-1234567/).
// Laisse null : le site est complet sans photo.
export const SERVICES = [
  { title: "Électricien bâtiment", text: "Installation et mise aux normes pour logements, commerces et bureaux.", img: null },
  { title: "Décoration intérieure en lumière", text: "Éclairage d’ambiance, LED, spots : la lumière qui met vos espaces en valeur.", img: null },
  { title: "Installation bâtiment", text: "Tableaux électriques, circuits et équipements, en neuf comme en rénovation.", img: null },
  { title: "Câblage en tout genre", text: "Courant fort et courant faible : réseau, téléphonie, vidéosurveillance, antenne.", img: null },
  { title: "Dépannage électrique", text: "Panne, court-circuit, disjoncteur qui saute : nous intervenons vite.", img: null },
  { title: "Maintenance électrique", text: "Contrôles et entretien réguliers pour éviter les pannes et rester en sécurité.", img: null },
];

export const SCENES = [
  { name: "Chaleureux", temp: "2700 K", color: "#FFB347", text: "Salon, chambre, restaurant : une lumière douce qui invite à rester." },
  { name: "Naturel", temp: "4000 K", color: "#FFE6B0", text: "Cuisine, bureau, boutique : une lumière nette, agréable pour travailler." },
  { name: "Clair", temp: "6500 K", color: "#BCD8FF", text: "Atelier, garage, vitrine : une lumière froide et précise." },
  { name: "Signature", temp: "RVB", color: "#B66BFF", text: "Bar, salle de jeux, enseigne : une couleur qui fait l’identité du lieu." },
];

export const STEPS = [
  { t: "Vous nous contactez", d: "Par téléphone ou via le formulaire. Dites-nous ce dont vous avez besoin." },
  { t: "Nous établissons un devis", d: "Un prix clair, annoncé avant le début des travaux." },
  { t: "Nous intervenons", d: "Un travail soigné, aux normes, et un chantier laissé propre." },
];

// Photos : mets tes images dans public/realisations/ puis écris le chemin.
// Exemple : image: "/realisations/chantier-1.jpg"
// Tant que image est null, "Photo à venir" s'affiche.
export const REALISATIONS = [
  { title: "Réalisation 1", category: "Installation bâtiment", image: null },
  { title: "Réalisation 2", category: "Décoration en lumière", image: null },
  { title: "Réalisation 3", category: "Câblage", image: null },
  { title: "Réalisation 4", category: "Dépannage électrique", image: null },
  { title: "Réalisation 5", category: "Maintenance électrique", image: null },
  { title: "Réalisation 6", category: "Électricien bâtiment", image: null },
];
