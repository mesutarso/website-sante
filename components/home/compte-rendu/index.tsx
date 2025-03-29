import { Container, Section } from "@/components/craft";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CompteRenduCard from "./card";

interface CompteRenduContent {
  title: string;
  description: string;
  video: any;
}
const data: CompteRenduContent[] = [
  {
    title: "COMPTE RENDU DE LA MISSION À PARIS",
    description:
      "Par devoir responsabilité et en vertu des principes de redevabilité, je vous présente le compte rendu de ma mission à Paris, effectuée du 27 juin au 1er juillet 2024.  Restons connecté(e)s !",
    video: "https://res.cloudinary.com/dxq5qufow/video/upload/v1728916438/cooperation/t32ximsdsn4hzcujxbfu.mp4",
  },
  
  {
    title: "Audience accordée à Mr RANDOLPH Augustin/Directeur Pays ai/USAID",
    description:
      "Audience accordée à Mr RANDOLPH Augustin/Directeur Pays ai/USAID",
    video: "/videos/usaid.mp4",
  },
];
function CompteRendu() {
  return (
    <div className={"bg-[#E6EBEE]"}>
      <Section className={"py-16"}>
        {/* <Container className={''}>
                    <div className={'mb-20'}>
                        <h1 className={'heading uppercase lg:max-w-2xl '}>
                            Compte Rendu
                        </h1>
                    </div>
                </Container> */}
        <Container>
          <Carousel>
            <CarouselContent>
              {data.map((item: any, key: number) => (
                <CarouselItem key={key}>
                  <CompteRenduCard
                    title={item.title}
                    description={item.description}
                    video={item.video}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </Section>
    </div>
  );
}

export default CompteRendu;
