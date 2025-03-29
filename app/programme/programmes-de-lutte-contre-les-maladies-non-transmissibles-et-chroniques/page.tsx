"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type AccordionItem = {
  title: string;
  mission: string;
  attributions: string[];
};

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems: AccordionItem[] = [
    {
      title: "Programme National de Lutte contre les Maladies Chroniques Non Transmissibles (PNLMCNT)",
      mission:
        "Réduire l’incidence et la mortalité liées aux maladies chroniques non transmissibles (cancers, maladies respiratoires, maladies métaboliques, etc.) à travers la prévention, le dépistage et l’amélioration de la prise en charge.",
      attributions: [
        "Élaborer et mettre en œuvre des stratégies de prévention et de dépistage précoce.",
        "Assurer l’accès aux traitements et soins palliatifs.",
        "Sensibiliser la population sur les facteurs de risque (tabac, alcool, sédentarité, alimentation).",
        "Renforcer la formation des professionnels de santé.",
        "Promouvoir la recherche sur les maladies chroniques en RDC."
      ],
    },
    {
      title: "Programme National de Lutte contre le Diabète (PNLD)",
      mission:
        "Améliorer la prévention, le dépistage et la prise en charge du diabète en RDC afin de réduire la morbidité et la mortalité liées à cette maladie.",
      attributions: [
        "Mettre en place des campagnes de dépistage précoce.",
        "Sensibiliser la population sur la prévention et l’adoption d’un mode de vie sain.",
        "Assurer la disponibilité et l’accessibilité de l’insuline et des médicaments antidiabétiques.",
        "Former les professionnels de santé à la prise en charge du diabète.",
        "Encourager la surveillance des complications du diabète (neuropathie, néphropathie, rétinopathie, etc.)."
      ],
    },
    {
      title: "Programme National de Lutte contre les Maladies Cardiovasculaires (PNLMCV)",
      mission:
        "Réduire la prévalence et la mortalité des maladies cardiovasculaires par la prévention, le dépistage et l’amélioration de l’accès aux soins.",
      attributions: [
        "Sensibiliser la population sur les facteurs de risque cardiovasculaires (hypertension, cholestérol, obésité, tabagisme).",
        "Assurer le dépistage précoce des maladies cardiovasculaires",
        "Faciliter l’accès aux traitements et aux soins spécialisés.",
        "Renforcer les capacités des professionnels de santé en cardiologie.",
        "Mettre en place un système de surveillance et de prévention des maladies cardiovasculaires"
      ],
    },
    {
      title: "Programme National de Lutte contre le Noma (PNLN)",
      mission:
        "Éradiquer le noma, une infection bactérienne dévastatrice affectant principalement les enfants souffrant de malnutrition et vivant dans des conditions d’hygiène précaires.",
      attributions: [
        "Dépister et traiter précocement les cas de noma.",
        "Assurer la réhabilitation chirurgicale et la prise en charge psychosociale des patients.",
        "Améliorer l’accès à l’eau potable et promouvoir l’hygiène bucco-dentaire.",
        "Sensibiliser la population sur les facteurs de risque et les mesures préventives.",
        "Renforcer la surveillance et la recherche sur le noma."
      ],
    },
    {
      title: "Programme National de Santé Mentale (PNSM)",
      mission:
        "Promouvoir la santé mentale, prévenir et prendre en charge les troubles psychiatriques et psychosociaux en RDC.",
      attributions: [
        "Développer des services de prise en charge psychologique et psychiatrique accessibles à tous.",
        "Former les professionnels de santé à la détection et au traitement des troubles mentaux.",
        "Lutter contre la stigmatisation des personnes atteintes de troubles mentaux.",
        "Assurer un suivi des patients et faciliter leur réinsertion sociale.",
        "Sensibiliser la population sur l’importance de la santé mentale et du bien-être psychologique."
      ],
    },
    {
      title: "Programme National de Lutte contre les Toxicomanies (PNLCT)",
      mission:
        "Réduire l’usage des substances psychoactives (drogues, alcool, tabac) et leurs conséquences sur la santé publique et la société.",
      attributions: [
        "Mettre en place des campagnes de prévention et de sensibilisation.",
        "Offrir des services de prise en charge et de réhabilitation pour les toxicomanes.",
        "Renforcer la lutte contre le trafic et la consommation des drogues illicites.",
        "Former les professionnels de santé et les travailleurs sociaux à la gestion des addictions.",
        "Collaborer avec les services de sécurité et les ONG pour une approche multisectorielle de la lutte contre les toxicomanies."
      ],
    },
    
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-blue w-full md:min-h-[400px] min-h-[250px] text-white p-6 flex items-center justify-center">
        <div className="text-center max-w-5xl">
          <h1 className="md:text-5xl text-2xl font-bold mb-4 uppercase font-rocgrotesk">
            Programmes de lutte contre les maladies non transmissibles et chroniques
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen bg-white">
        {/* Beige background covering only 30% of the height */}
        <Image alt="image catastrophe" fill src={'/images/chronique.jpeg'} className="absolute top-0 left-0 right-0 h-[30%] object-cover" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-16">
          {/* Card with table */}
          <div className="relative bg-white rounded-lg shadow-md p-6 md:p-8 overflow-hidden mt-16">
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-blue rounded-lg overflow-hidden bg-blue shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between items-center w-full p-4 md:p-6 text-left font-medium focus:outline-none"
                    >
                      <span className="text-lg text-white">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-gray-500 transition-transform duration-300",
                          openIndex === index ? "transform rotate-180" : ""
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        openIndex === index
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="p-4 md:p-6 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
                        <p className="animate-fadeIn mb-4">
                        <b>Mission :</b> <br />
                          {item.mission}</p>
                          <b>Attributions :</b>
                        <ul className="list-disc ml-10 mt-5">
                          {item.attributions.map((attr, index) => (
                            <li key={index}>{attr}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
