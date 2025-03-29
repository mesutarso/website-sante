export interface Event {
  title: string;
  location: string;
  date: string;
  inscriptionLink: string;
  color: string;
}

export const events: Event[] = [
  {
    title: "Journée mondiale de sensibilisation à l'autisme",
    location: "À définir",
    date: "2 avril 2024",
    inscriptionLink: "https://forms.gle/example1",
    color: "pink",
  },
  {
    title: "Journée mondiale de la voix",
    location: "À définir",
    date: "16 avril 2024",
    inscriptionLink: "https://forms.gle/example2",
    color: "blue",
  },
  {
    title: "Journée mondiale sur la sécurité et la santé au travail",
    location: "À définir",
    date: "28 avril 2024",
    inscriptionLink: "https://forms.gle/example3",
    color: "blue",
  },
  {
    title: "Journée mondiale de l'asthme",
    location: "À définir",
    date: "6 mai 2024",
    inscriptionLink: "https://forms.gle/example4",
    color: "blue",
  },
];
