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
      title: "Programme National des Urgences et Catastrophes (PNUC)",
      mission:
        "Assurer une réponse rapide et efficace face aux situations d’urgence et aux catastrophes naturelles ou anthropiques, afin de limiter les pertes humaines et matérielles.",
      attributions: [
        "Développer des stratégies nationales de gestion des urgences sanitaires.",
        "Coordonner les interventions en cas de catastrophes naturelles, épidémies ou conflits.",
        "Mettre en place des équipes de secours et des unités mobiles d'intervention.",
        "Assurer la formation des personnels de santé aux situations d’urgence.",
        "Renforcer les infrastructures de santé pour la prise en charge des victimes de catastrophes."
      ],
    },
    {
      title: "Programme National de Prévention des Accidents (PNPA)",
      mission:
        "Réduire l’incidence des accidents domestiques, routiers et professionnels à travers la prévention et la sensibilisation.",
      attributions: [
        "Élaborer et mettre en œuvre des campagnes de sensibilisation sur la prévention des accidents.",
        "Promouvoir des mesures de sécurité dans les transports, les écoles et les lieux de travail.",
        "Mettre en place des protocoles de prise en charge des victimes d’accidents.",
        "Travailler en collaboration avec les forces de l’ordre pour renforcer la sécurité routière.",
        "Assurer le suivi des statistiques et des indicateurs liés aux accidents."
      ],
    },
    {
      title: "Programme National de Lutte contre les Épidémies et Pandémies (PNLEP)",
      mission:
        "Renforcer les capacités de prévention, de surveillance et de riposte contre les épidémies et pandémies afin de protéger la population contre les maladies à potentiel épidémique.",
      attributions: [
        "Développer et mettre en œuvre des plans de prévention et de réponse aux épidémies.",
        "Renforcer les capacités des laboratoires pour le diagnostic rapide des maladies émergentes.",
        "Assurer la surveillance épidémiologique et le signalement précoce des foyers infectieux.",
        "Coordonner les actions de vaccination en cas d’épidémie.",
        "Travailler en synergie avec les organisations internationales pour la gestion des pandémies."
      ],
    },
    {
      title: "Programme National de Surveillance Intégrée des Maladies et Riposte (PN-SIMR)",
      mission:
        "Améliorer la surveillance des maladies à potentiel épidémique et renforcer la riposte rapide afin de prévenir leur propagation.",
      attributions: [
        "Mettre en place un système de surveillance et d’alerte précoce pour les maladies transmissibles.",
        "Assurer la collecte, l’analyse et la diffusion des données épidémiologiques.",
        "Former les agents de santé à la détection et à la notification des maladies émergentes.",
        "Renforcer la capacité des laboratoires pour une détection rapide et efficace des agents pathogènes.",
        "Assurer la coordination des interventions en cas de flambée épidémique."
      ],
    },
    
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-blue w-full min-h-[400px] text-white p-6 flex items-center justify-center">
        <div className="text-center  max-w-5xl">
          <h1 className="text-5xl font-bold mb-4 uppercase font-rocgrotesk">
            Programmes d’urgence et de gestion des catastrophes
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen bg-white">
        {/* Beige background covering only 30% of the height */}
        {/* <div className="absolute top-0 left-0 right-0 h-[30%] bg-[#f8f0e0] z-0"></div> */}
        <Image alt="image catastrophe" fill src={'/images/catastrophes.jpg'} className="absolute top-0 left-0 right-0 h-[30%] object-cover" />

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
