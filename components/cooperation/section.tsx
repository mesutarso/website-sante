import React from "react";
import { Container, Section } from "@/components/craft";

interface SectionProps {
  text: string;
}
const Description: React.FC<SectionProps> = ({ text }) => {
  return (
    <div className="relative min-h-[600px] bg-yellowSky flex items-center justify-center">
      <Section className="md:py-16">
        <Container className="text-center">
          <p className="text-xl font-black text-center text-blue">{text}</p>
        </Container>
      </Section>
    </div>
  );
};

export default Description;
