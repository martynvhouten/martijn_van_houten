export type Project = {
  slug: string;
  title: string;
  intro: string;
  highlights: string[];
  outcomes: string[];
  gallery: { src: string; alt: string; width: number; height: number }[];
};

export const projects: Project[] = [
  {
    slug: "boekhouder-nl",
    title: "Boekhouder.nl",
    intro: "Overzichtelijke website met heldere diensten en duidelijke CTA’s.",
    highlights: ["Dienstenstructuur", "Snelle laadtijden", "Technische SEO"],
    outcomes: ["duidelijke diensten", "snelle laadtijden"],
    gallery: [
      { src: "/hero-mock.svg", alt: "Mockup", width: 560, height: 360 },
    ],
  },
  {
    slug: "fysio-praktijk",
    title: "Fysio Praktijk",
    intro: "Toegankelijke site met duidelijke afspraak-CTA’s.",
    highlights: ["Heldere navigatie", "Afspraakmodule", "Toegankelijkheid"],
    outcomes: ["eenvoudig afspraak maken", "snelle laadtijden"],
    gallery: [
      { src: "/hero-mock.svg", alt: "Mockup", width: 560, height: 360 },
    ],
  },
  {
    slug: "salon-studio",
    title: "Salon Studio",
    intro: "Elegante site met rustige uitstraling en online afspraken.",
    highlights: ["Rustige stijl", "Prijslijst", "Afspraakintegratie"],
    outcomes: ["rustige uitstraling", "duidelijke prijslijst"],
    gallery: [
      { src: "/hero-mock.svg", alt: "Mockup", width: 560, height: 360 },
    ],
  },
  {
    slug: "coach-online",
    title: "Coach Online",
    intro: "Heldere positionering en structuur voor trajecten.",
    highlights: ["Positionering", "Trajecten & reviews", "Conversie-CTA’s"],
    outcomes: ["duidelijke trajecten", "betere leesbaarheid"],
    gallery: [
      { src: "/hero-mock.svg", alt: "Mockup", width: 560, height: 360 },
    ],
  },
];


