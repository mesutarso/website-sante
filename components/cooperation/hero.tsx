import { Container, Section } from "@/components/craft";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="bg-blue w-full min-h-[600px] p-6 flex items-center justify-center">
      <Section className="flex  h-full">
        <Container className="text-center ">
          <h1 className="text-5xl font-black text-center uppercase text-white">
            {title}
          </h1>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
