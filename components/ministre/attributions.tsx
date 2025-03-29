import { Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Container, Section } from "@/components/craft";
import Image from "next/image";

const attributions = [
  {
    title: "Organisation, réglementation et promotion",
    image: "/images/picto_promouvoir_10506a5b6b.svg",
    content:
      "De la médecine traditionnelle, du système de Santé, de l'Hygiène, des aliments, médicaments, produits phytosanitaires, produits cosmétiques et d’hygiène corporelle.",
  },
  {
    title: "Elaboration ",
    image: '/images/picto_controle_et_suivi_779e8ac43a.svg',
    content:
      "Des normes de salubrité en milieu urbain, des programmes de formation du personnel et des normes relatives à la Santé.",
  },
  {
    title: "Organisation et Gestion",
    image: "/images/picto_lois_et_reglements_676e708c7a.svg",
    content:
      "De l'enseignement technique médical du niveau secondaire, de la Police sanitaire aux frontières, de la gestion du personnel médical, de la prévention et de l'inspection sanitaire humanitaire et médicale. ",
  },
];

function Attributions() {
  return (
    <div className="bg-[#f6f8fc]">
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2559] leading-tight mb-8">
                    Nos missions
                </h1>

                <div className="space-y-6 text-[#333] leading-relaxed">
                  <p>
                    Le Ministère de la Santé Publique, Hygiène et Préventions,
                    dont le siège se trouve à Kinshasa, est chargé d'élaborer et
                    mettre en œuvre des politiques, des plans et des stratégies
                    en matière de santé, conformément aux orientations du
                    gouvernement. Il coordonne également les activités de tous
                    les acteurs impliqués dans le secteur de la santé.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1  w-full gap-12">
                <p>
                Voici une liste des ses principales <b className="text-blue"> attributions</b> :
                </p>
                {attributions.map((attribution, i) => (
                  <Collapsible key={i}>
                    <CollapsibleTrigger className="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
                      <div className="flex">
                        <Image src={attribution.image} alt="" width={30} height={30}  />
                        <h2 className="text-md md:text-xl font-bold text-blue ml-4">
                          {attribution.title}
                        </h2>
                      </div>
                      <Plus className="text-blue" aria-hidden="true" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="bg-white p-4  shadow-md mt-2 rounded-xl">
                      <p className="text-lg">{attribution.content}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-center uppercase text-blue mb-12"></h1>
        </Container>
      </Section>
    </div>
  );
}

export default Attributions;
