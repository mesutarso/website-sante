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
      title: "Institut National de Recherche Biomédicale (INRB)",
      mission:
        "Conduire des recherches biomédicales pour appuyer la surveillance épidémiologique et la lutte contre les maladies en RDC.",
      attributions: [
        "Assurer la surveillance biologique des maladies émergentes et réémergentes.",
        "Réaliser des analyses et des tests diagnostiques avancés pour les maladies infectieuses.",
        "Développer des recherches sur les vaccins et traitements adaptés au contexte congolais.",
        "Former les professionnels de la santé en techniques de laboratoire et en biologie moléculaire.",
        "Collaborer avec les institutions scientifiques nationales et internationales."
      ],
    },
    {
      title: "Laboratoire Pharmaceutique de Kinshasa (LPK)",
      mission:
        "Produire et distribuer des médicaments essentiels et des produits de santé à un coût abordable.",
      attributions: [
        "Assurer la production locale de médicaments génériques et de qualité.",
        "Réduire la dépendance aux importations pharmaceutiques.",
        "Garantir la disponibilité des intrants médicaux pour les structures de santé publiques et privées.",
        "Veiller à la conformité des médicaments aux normes internationales.",
        "Contribuer à la recherche pharmaceutique et au développement de nouvelles formulations."
      ],
    },
    {
      title: "Programme National de Formation et Renforcement des Capacités Sanitaires (PNFRCS)",
      mission:
        "Améliorer les compétences du personnel de santé pour garantir des soins de qualité à la population.",
      attributions: [
        "Élaborer et mettre en œuvre des plans de formation continue pour les professionnels de santé.",
        "Assurer la formation des nouveaux agents de santé et leur recyclage.",
        "Développer des curricula adaptés aux défis sanitaires nationaux.",
        "Renforcer les capacités managériales et techniques des gestionnaires des établissements de santé.",
        "Suivre et évaluer l’impact des formations sur l’amélioration des services de santé."
      ],
    },
    {
      title: "Programme National d'Appui à la Décentralisation du Système de Santé (PNADSS)",
      mission:
        "Accompagner la mise en œuvre de la décentralisation sanitaire pour une meilleure accessibilité des soins.",
      attributions: [
        "Assurer l’autonomisation des provinces dans la gestion des ressources sanitaires.",
        "Renforcer les capacités des autorités sanitaires provinciales et locales.",
        "Adapter les politiques de santé aux réalités spécifiques de chaque région.",
        "Promouvoir la gestion participative du secteur de la santé.",
        "Développer des mécanismes de financement durable des services de santé locaux."
      ],
    },
    {
      title: "Programme National de Systèmes d’Information Sanitaire (PNSIS)",
      mission:
        "Optimiser la collecte, le traitement et l’analyse des données sanitaires pour améliorer la prise de décision.",
      attributions: [
        "Mettre en place un système intégré de collecte et de gestion des données sanitaires.",
        "Former le personnel médical à l’utilisation des outils numériques pour le suivi des patients.",
        "Assurer la mise en réseau des hôpitaux et centres de santé pour une meilleure traçabilité des informations médicales.",
        "Produire des statistiques sanitaires fiables pour orienter les politiques publiques.",
        "Veiller à la protection des données de santé et à leur confidentialité."
      ],
    },
    {
      title: "Programme National de Santé au Travail (PNST)",
      mission:
        "Promouvoir la santé et la sécurité des travailleurs en milieu professionnel.",
      attributions: [
        "Élaborer des politiques de prévention des maladies professionnelles.",
        "Assurer le suivi médical des travailleurs exposés à des risques spécifiques.",
        "Sensibiliser les employeurs et les employés aux bonnes pratiques en matière de santé au travail.",
        "Renforcer la réglementation sur la sécurité sanitaire dans les entreprises.",
        "Mettre en place des protocoles de gestion des accidents de travail."
      ],
    },
    {
      title: " Programme National de Lutte contre les Risques Sanitaires liés à l'Environnement (PNLRSE)",
      mission:
        "Réduire l’impact des facteurs environnementaux sur la santé de la population.",
      attributions: [
        "Assurer la surveillance des maladies liées à la pollution et aux changements climatiques.",
        "Développer des politiques de prévention contre les risques chimiques et biologiques.",
        "Collaborer avec les secteurs de l’environnement et de l’urbanisme pour la gestion des risques sanitaires.",
        "Sensibiliser la population aux bonnes pratiques en matière d’hygiène environnementale.",
        "Contrôler la qualité de l’air, de l’eau et des aliments."
      ],
    },
    {
      title: "Programme National de Gestion des Déchets Biomédicaux (PNGDBM)",
      mission:
        "Mettre en place un système efficace et sécurisé de gestion des déchets biomédicaux.",
      attributions: [
        "Élaborer des normes de gestion et d’élimination des déchets médicaux.",
        "Assurer la formation des personnels de santé sur les pratiques sûres de gestion des déchets.",
        "Mettre en place des infrastructures adaptées pour le traitement des déchets biomédicaux.",
        "Réduire les risques de contamination liés à la mauvaise gestion des déchets hospitaliers.",
        "Promouvoir l’utilisation de technologies propres pour l’élimination des déchets médicaux."
      ],
    },
    {
      title: "Programme National de Surveillance Épidémiologique et Gestion des Alertes (PNSEGA)",
      mission:
        "Renforcer la détection précoce et la réponse aux menaces sanitaires.",
      attributions: [
        "Mettre en place un système d’alerte rapide pour les épidémies.",
        "Former le personnel de santé à la surveillance épidémiologique.",
        "Assurer la coordination entre les structures de santé pour une riposte efficace.",
        "Évaluer les menaces sanitaires et proposer des stratégies adaptées.",
        "Collaborer avec les organisations internationales pour la gestion des crises sanitaires."
      ],
    },
    {
      title: " Programme National de Recherche en Santé Publique (PNRSP)",
      mission:
        "Développer la recherche pour orienter les politiques de santé publique.",
      attributions: [
        "Produire des études sur les déterminants de la santé et les pathologies émergentes.",
        "Assurer le financement des projets de recherche innovants en santé publique.",
        "Collaborer avec les universités et les instituts de recherche.",
        "Diffuser les résultats de recherche pour améliorer les pratiques sanitaires.",
        "Intégrer les résultats scientifiques dans les stratégies nationales de santé."
      ],
    },
    {
      title: "Programme National de Renforcement du Leadership et de la Gouvernance Sanitaire (PNRLGS)",
      mission:
        "Améliorer la gestion et le leadership dans le secteur de la santé.",
      attributions: [
        "Développer des formations pour les responsables sanitaires.",
        "Mettre en place des mécanismes de contrôle et d’évaluation de la performance des services de santé.",
        "Renforcer la transparence et la gestion des ressources sanitaires.",
        "Favoriser la participation communautaire dans la gouvernance sanitaire.",
        "Assurer le suivi et l’évaluation des réformes dans le secteur de la santé."
      ],
    },
    {
      title: "Programme National d’Assurance Qualité des Soins de Santé (PNAQSS)",
      mission:
        "Garantir des soins de qualité conformes aux normes nationales et internationales.",
      attributions: [
        "Élaborer des protocoles de soins standards pour les établissements de santé.",
        "Mettre en place un système d’évaluation de la qualité des soins.",
        "Assurer la certification et l’accréditation des structures sanitaires",
        "Renforcer la formation des professionnels de santé en matière de qualité des soins.",
        "Mettre en œuvre des mécanismes de suivi et d’amélioration continue de la qualité des services de santé."
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
            Programmes spécialisés et instituts de recherche
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen bg-white">
        {/* Beige background covering only 30% of the height */}
        <Image alt="image catastrophe" fill src={'/images/labo.jpeg'} className="absolute top-0 left-0 right-0 h-[30%] object-cover" />

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
