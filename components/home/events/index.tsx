import React from "react";
import { Container, Section } from "@/components/craft";
import EventCard from "@/components/events/Card";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  color: "pink" | "blue";
  title: string;
  location: string;
  date: string;
}

function EventsSection() {
  return (
    <div className={"relative min-h-[500px] bg-yellowSky"}>
      <Section>
        <Container className="flex flex-col  justify-center  min-h-[600px]">
          <h1 className={"heading mb-10  text-blue text-center"}>
            Événements
          </h1>

          <div className="space-y-4 p-2 mx-auto">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:transparent dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-white h-10 px-4 py-6 bg-blue text-white xl:txt-btn-big border-4 border-blue">
              Voir les évenements
              <ArrowRight />
            </button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default EventsSection;

const events: EventCardProps[] = [
  {
    color: "pink",
    title:
      "JOURNÉE MONDIALE DE LA SANTÉ",
    location: "RDC, Kinshasa, Hôtel du gouvernement",
    date: "Lundi 7 Avril 2025",
  },
  {
    color: "blue",
    title:
      "LE XIXE SOMMET DE LA FRANCOPHONIE, CONFÉRENCE DES CHEFS D'ÉTAT ET DE GOUVERNEMENT",
    location: "France, Paris, Villers-Cotterêts",
    date: "19 et 20 Nov 2024",
  },
  {
    color: "blue",
    title:
      "LE XIXE SOMMET DE LA FRANCOPHONIE, CONFÉRENCE DES CHEFS D'ÉTAT ET DE GOUVERNEMENT",
    location: "France, Paris, Villers-Cotterêts",
    date: "19 et 20 Nov 2024",
  },
];
