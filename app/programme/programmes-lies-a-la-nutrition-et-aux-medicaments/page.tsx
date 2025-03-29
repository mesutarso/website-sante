"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  mission: string;
  attributions: string[];
};

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems: AccordionItem[] = [
    {
      title: "Programme National de Nutrition (PRONANUT)",
      mission:
        "Réduire la malnutrition sous toutes ses formes en RDC à travers des interventions nutritionnelles adaptées et un accès amélioré aux aliments sains.",
      attributions: [
        "Élaborer et mettre en œuvre des stratégies nationales de nutrition.",
        "Assurer la prise en charge des enfants souffrant de malnutrition aiguë et chronique.",
        "Promouvoir l'allaitement maternel exclusif et une alimentation complémentaire adéquate.",
        "Sensibiliser les communautés aux bonnes pratiques nutritionnelles.",
        "Assurer le suivi et l’évaluation des indicateurs nutritionnels."
      ],
    },
    {
      title: "Programme National de Promotion de la Médecine Traditionnelle (PNPMT)",
      mission:
        "Valoriser et encadrer la médecine traditionnelle en assurant son intégration dans le système de santé national de manière sécurisée et efficace.",
      attributions: [
        "Identifier et réglementer les pratiques de médecine traditionnelle.",
        "Assurer la formation des praticiens de médecine traditionnelle.",
        "Soutenir la recherche sur les remèdes traditionnels.",
        "Promouvoir l'utilisation rationnelle et sécurisée des produits issus de la médecine traditionnelle.",
        "Assurer la collaboration entre la médecine conventionnelle et la médecine traditionnelle."
      ],
    },
    {
      title: "Programme National d'Approvisionnement en Médicaments Essentiels (PNMAM)",
      mission:
        "Garantir la disponibilité et l’accessibilité des médicaments essentiels de qualité pour tous les citoyens de la RDC.",
      attributions: [
        "Assurer l’approvisionnement en médicaments essentiels et en produits de santé.",
        "Réguler le marché pharmaceutique pour garantir la qualité et éviter la contrefaçon.",
        "Renforcer les capacités des structures de stockage et de distribution des médicaments.",
        "Mettre en place un système de surveillance et de gestion des stocks de médicaments.",
        "Promouvoir l’usage rationnel des médicaments par les professionnels de santé et la population."
      ],
    },
    {
      title: "Programme National de Lutte contre la Malnutrition Aiguë Sévère (PNLMAS)",
      mission:
        "Assurer la prise en charge et la prévention de la malnutrition aiguë sévère afin de réduire la mortalité infantile et améliorer la santé des populations vulnérables.",
      attributions: [
        "Mettre en place des centres de récupération nutritionnelle.",
        "Assurer le dépistage et la prise en charge des enfants atteints de malnutrition aiguë sévère.",
        "Renforcer la capacité des agents de santé pour la gestion de la malnutrition.",
        "Sensibiliser la population sur les causes et la prévention de la malnutrition.",
        "Assurer la coordination des interventions multisectorielles pour lutter contre la malnutrition."
      ],
    },
    {
      title: "Programme National de Sécurité Sanitaire des Aliments (PNSSA)",
      mission:
        "Garantir la sécurité sanitaire des aliments afin de protéger la population contre les maladies d'origine alimentaire et promouvoir une alimentation saine.",
      attributions: [
        "Contrôler la qualité et la sécurité des aliments produits et commercialisés en RDC.",
        "Établir des normes sanitaires pour les produits alimentaires.",
        "Sensibiliser la population aux risques liés à l’alimentation contaminée.",
        "Assurer la formation des acteurs de la chaîne alimentaire sur l’hygiène et la sécurité alimentaire.",
        "Collaborer avec d’autres secteurs pour renforcer la surveillance et la gestion des risques alimentaires."
      ],
    },
    
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-blue w-full min-h-[600px] text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4 uppercase font-rocgrotesk">
            Programmes liés à la nutrition et aux médicaments
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen bg-white">
        {/* Beige background covering only 30% of the height */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-[#f8f0e0] z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-16">
          {/* Background text */}
          <div className="absolute top-0 left-0 pointer-events-none">
            <h1 className="text-8xl md:text-7xl font-bold text-[#e9d5b9] opacity-40">
              Programmes liés à la nutrition et aux médicaments
            </h1>
          </div>

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
