export interface Event {
  title: string;
  location: string;
  date: string;
  inscriptionLink: string;
  img: string;
}

export const events: Event[] = [
  {
    title: "Journée mondiale de la physiothérapie",
    location: "À définir",
    date: "8 septembre 2025",
    inscriptionLink: "https://forms.gle/example1",
    img: "/images/events/physiotherapie_cerveau.jpg",
  },
  {
    title: "Journée mondiale de prévention du suicide",
    location: "À définir",
    date: "10 septembre 2025",
    inscriptionLink: "https://forms.gle/example2",
    img: "/images/events/suicide.jpg",
  },
  {
    title: "Journée mondiale des premiers secours",
    location: "À définir",
    date: "14 septembre 2025",
    inscriptionLink: "https://forms.gle/example3",
    img: "/images/events/secourisme.webp",
  },
  {
    title: "Journée mondiale de la maladie d’Alzheimer",
    location: "À définir",
    date: "21 septembre 2025",
    inscriptionLink: "https://forms.gle/example4",
    img: "/images/events/alzheimer.jpg",
  },
  {
    title: "Journée mondiale de la sensibilisation à la leucémie chronique",
    location: "À définir",
    date: "22 septembre 2025",
    inscriptionLink: "https://forms.gle/example3",
    img: "/images/events/leucemie.jpg",
  },
  { 
    title: "Journée mondiale de la contraception",
    location: "À définir",
    date: "26 septembre 2025",
    inscriptionLink: "https://forms.gle/example1",
    img: "/images/events/contraception.jpg",
  },
 
];
