import React from "react";
import { Container, Section } from "@/components/craft";
import EventCard from "@/components/events/Card";
import { events } from "@/lib/events";


function EventsSection() {
  return (
    <div className={"relative"}>
      <Section className="py-10">
        <Container className="flex flex-col  justify-center  ">
          <h1 className={"heading mb-8  text-blue text-center"}>
            Événements
          </h1>

          <div className="space-y-4 p-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

        </Container>
      </Section>
    </div>
  );
}

export default EventsSection;


