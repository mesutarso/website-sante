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
      title: "Programme National de Lutte contre le Paludisme (PNLP)",
      mission:
        "Réduire la morbidité et la mortalité liées au paludisme à travers des interventions de prévention, de diagnostic et de traitement efficace.",
      attributions: [
        "Assurer la distribution de moustiquaires imprégnées d'insecticide.",
        "Promouvoir le diagnostic et le traitement précoces des cas de paludisme.",
        "Renforcer la surveillance épidémiologique.",
        "Sensibiliser la population sur la prévention.",
      ],
    },
    {
      title: "Programme National de Lutte contre la Trypanosomiase Humaine Africaine (PNLTHA)",
      mission:
        "Éradiquer la maladie du sommeil par le dépistage, le traitement et la lutte contre la mouche tsé-tsé.",
      attributions: [
        "Organiser des campagnes de dépistage actif et passif.",
        "Assurer la prise en charge gratuite des malades.",
        "Mettre en œuvre des stratégies de lutte antivectorielle",
        "Renforcer la surveillance épidémiologique.",
      ],
    },
    {
      title: " Programme National de Lutte contre la Tuberculose (PNT)",
      mission:
        "Réduire l’incidence et la mortalité liées à la tuberculose par une prise en charge efficace et gratuite.",
      attributions: [
        "Assurer le diagnostic et le traitement de la tuberculose, y compris les formes résistantes.",
        "Intégrer la lutte contre la tuberculose et le VIH/SIDA.",
        "Approvisionner les structures sanitaires en médicaments anti-tuberculeux.",
        "Sensibiliser et éduquer la population sur la prévention.",
      ],
    },
    {
      title: "  Programme National de Lutte contre le VIH/SIDA (PNLS)",
      mission:
        "Réduire la transmission du VIH et améliorer la prise en charge des personnes vivant avec le VIH/SIDA.",
      attributions: [
        "Promouvoir la prévention et le dépistage volontaire.",
        "Assurer l’accès aux traitements antirétroviraux (ARV).",
        "Renforcer les services de prévention de la transmission mère-enfant (PTME).",
        "Lutter contre la stigmatisation des personnes vivant avec le VIH.",
      ],
    },
    {
      title: "Programme National de Lutte contre la Lèpre (PNL)",
      mission:
        "Éliminer la lèpre par le dépistage précoce, le traitement et la réhabilitation des patients.",
      attributions: [
        "Assurer le diagnostic et la prise en charge gratuite des patients.",
        "Lutter contre la stigmatisation des malades.",
        "Former les professionnels de santé.",
        "Assurer la prévention des invalidités",
      ],
    },
    {
      title: "Programme National de Lutte contre l’Onchocercose (PNLO)",
      mission:
        "Éliminer l’onchocercose par le traitement de masse et la lutte contre la mouche noire.",
      attributions: [
        "Distribuer les traitements antiparasitaires (ivermectine).",
        "Lutter contre le vecteur de la maladie.",
        "Assurer le suivi épidémiologique.",
        "Sensibiliser la population",
      ],
    },
    {
      title: "Programme National de Lutte contre la Bilharziose, la Peste et les Parasitoses Intestinales (PNLBPPI)",
      mission:
        "Réduire l’incidence des maladies parasitaires et infectieuses par la prévention et le traitement.",
      attributions: [
        "Mettre en place des campagnes de traitement de masse.",
        "Assurer l’accès à l’eau potable et à l’assainissement.",
        "Sensibiliser aux bonnes pratiques d’hygiène..",
      ],
    },
    {
      title: "Programme Élargi de Vaccination et Lutte contre les Maladies Transmissibles de l'Enfance (PEV-LMTE)",
      mission:
        "Protéger les enfants contre les maladies évitables par la vaccination.",
      attributions: [
        "Organiser des campagnes de vaccination.",
        "Assurer l’approvisionnement en vaccins.",
        "Renforcer la surveillance des maladies évitables.",
        "Sensibiliser sur l’importance de la vaccination.",
      ],
    },
    {
      title: "Programme National de Lutte contre les Fièvres Hémorragiques Virales (PNLFHV)",
      mission:
        "Prévenir et contrôler les épidémies de fièvres hémorragiques comme Ebola et Marburg.",
      attributions: [
        "Renforcer la surveillance et la détection précoce.",
        "Former les professionnels de santé.",
        "Élaborer des protocoles de riposte.",
        "Sensibiliser la population.",
      ],
    },
    {
      title: "Programme National de Lutte contre les Infections Respiratoires Aiguës (PNLIRA)",
      mission:
        "Réduire la mortalité due aux infections respiratoires aiguës, notamment chez les enfants et les personnes vulnérables.",
      attributions: [
        "Assurer la détection et le traitement rapide des cas.",
        "Promouvoir l’accès aux antibiotiques essentiels.",
        "Former les agents de santé aux meilleures pratiques.",
        "Sensibiliser à la prévention, notamment par la vaccination.",
      ],
    },
    {
      title: "Programme National de Lutte contre les Maladies Diarrhéiques (PNLMD)",
      mission:
        "Réduire l’impact des maladies diarrhéiques par la prévention et l’amélioration de l’hygiène.",
      attributions: [
        "Promouvoir l’accès à l’eau potable et aux infrastructures sanitaires.",
        "Assurer la distribution de solutions de réhydratation orale (SRO).",
        "Sensibiliser aux bonnes pratiques d’hygiène.",
        "Renforcer la vaccination contre le rotavirus.",
      ],
    },
    {
      title: "Programme National de Lutte contre les Hépatites Virales (PNLHV)",
      mission:
        "Prévenir et réduire la transmission des hépatites virales et améliorer la prise en charge des malades.",
      attributions: [
        "Promouvoir le dépistage précoce et la vaccination contre l’hépatite B.",
        "Assurer l’accès aux traitements antiviraux.",
        "Renforcer la sensibilisation et la prévention",
        "Intégrer la lutte contre les hépatites dans les programmes de santé publique.",
      ],
    },
    {
      title: "Programme National de Lutte contre la Drépanocytose (PNLDR)",
      mission:
        "Réduire la mortalité et améliorer la qualité de vie des patients drépanocytaires.",
      attributions: [
        "Assurer le dépistage néonatal et le suivi des patients.",
        "Faciliter l’accès aux soins et aux traitements.",
        "Former les professionnels de santé.",
        "Sensibiliser sur la prise en charge et la prévention des complications.",
      ],
    },
    {
      title: "Programme National de Lutte contre l’Ulcère de Buruli (PNLUB)",
      mission:
        "Réduire la prévalence de l’ulcère de Buruli et assurer une prise en charge efficace.",
      attributions: [
        "Mettre en place des stratégies de dépistage précoce.",
        "Assurer la prise en charge gratuite des cas.",
        "Sensibiliser la population dans les zones endémiques.",
        "Former les professionnels de santé.",
      ],
    },
    {
      title: "Programme National de Lutte contre les Maladies Tropicales Négligées (PNMTN)",
      mission:
        "Contrôler et éliminer les maladies tropicales négligées (MTN) en RDC.",
      attributions: [
        "Mettre en œuvre des stratégies de lutte adaptées.",
        "Fournir un traitement de masse dans les zones touchées.",
        "Renforcer la surveillance et la recherche.",
        "Sensibiliser les communautés.",
      ],
    },
    {
      title: "Programme National d’Hygiène aux Frontières (PNHF)",
      mission:
        "Prévenir l’introduction et la propagation des maladies transmissibles aux points d’entrée du pays.",
      attributions: [
        "Assurer le contrôle sanitaire aux frontières.",
        "Appliquer les normes internationales de surveillance sanitaire.",
        "Renforcer les capacités du personnel de santé aux frontières.",
      ],
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-blue w-full min-h-[600px] text-white p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4 uppercase font-rocgrotesk">
            Programmes de lutte contre les maladies transmissibles
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
              Programmes de lutte contre les maladies transmissibles
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
