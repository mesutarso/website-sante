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
      title: "Programme National de la Santé de la Reproduction (PNSR)",
      mission:
        "Améliorer la santé reproductive des femmes et des couples en RDC en garantissant l'accès aux soins, à l’information et aux services de planification familiale.",
      attributions: [
        "Assurer un accès équitable aux services de santé reproductive.",
        "Promouvoir la planification familiale et l'espacement des naissances.",
        "Réduire la mortalité maternelle et néonatale.",
        "Prendre en charge les complications liées à la grossesse et à l’accouchement.",
        "Sensibiliser sur la santé sexuelle et reproductive.",
      ],
    },
    {
      title: "Programme National de la Santé de l’Adolescent (PNSA)",
      mission:
        "Garantir aux adolescents un accès aux services de santé adaptés à leurs besoins en matière de croissance, de nutrition, de santé mentale et de sexualité.",
      attributions: [
        "Promouvoir l'éducation sexuelle et la prévention des IST/VIH.",
        "Assurer l’accès aux services de santé adaptés aux adolescents.",
        "Renforcer la prise en charge des troubles liés à la puberté et à la santé mentale.",
        "Sensibiliser les jeunes sur l’importance d’un mode de vie sain.",
      ],
    },
    {
      title: "Programme National de la Santé Scolaire (PNSS)",
      mission:
        "Préserver et promouvoir la santé des élèves en assurant un environnement scolaire sain et favorable à l’apprentissage.",
      attributions: [
        "Mettre en place des campagnes de dépistage et de vaccination en milieu scolaire.",
        "Promouvoir la nutrition et l’hygiène dans les écoles.",
        "Sensibiliser les élèves aux bonnes pratiques en matière de santé.",
        "Assurer la prise en charge des affections courantes en milieu scolaire.",
      ],
    },
    {
      title: "Programme National de la Santé Oculaire (PNSO)",
      mission:
        "Réduire la prévalence des maladies oculaires et prévenir la cécité en RDC grâce à des services de dépistage et de traitement accessibles.",
      attributions: [
        "Assurer le dépistage précoce des maladies oculaires.",
        "Faciliter l’accès aux soins ophtalmologiques.",
        "Sensibiliser sur la prévention des affections oculaires.",
        "Former les professionnels de santé en ophtalmologie.",
      ],
    },

    {
      title: "Programme National de la Santé Buccodentaire (PNSBD)",
      mission:
        "Prévenir et réduire l’incidence des maladies bucco-dentaires en assurant un accès aux soins dentaires et en promouvant l’hygiène bucco-dentaire.",
      attributions: [
        "Mettre en place des campagnes de sensibilisation sur l’hygiène bucco-dentaire.",
        "Assurer le dépistage et la prise en charge des maladies dentaires.",
        "Promouvoir l’accès aux soins dentaires de base.",
        "Former les professionnels de santé dentaire.",
      ],
    },

    {
      title: "Programme National de Mobilisation Sociale Polyvalente (PNMSP)",
      mission:
        "Prévenir et réduire l’incidence des maladies bucco-dentaires en assurant un accès aux soins dentaires et en promouvant l’hygiène bucco-dentaire.",
      attributions: [
        "Mettre en place des campagnes de sensibilisation sur l’hygiène bucco-dentaire.",
        "Assurer le dépistage et la prise en charge des maladies dentaires.",
        "Promouvoir l’accès aux soins dentaires de base.",
        "Former les professionnels de santé dentaire.",
      ],
    },

    {
      title: "Programme National de Promotion des Mutuelles de Santé (PNPMS)",
      mission:
        "Faciliter l’accès aux soins de santé à travers la promotion et le développement des mutuelles de santé en RDC.",
      attributions: [
        "Encourager la création et le fonctionnement des mutuelles de santé.",
        "Sensibiliser la population à l’adhésion aux mutuelles de santé.",
        "Soutenir le financement de la couverture santé à travers les mutuelles.",
        "Renforcer les capacités des gestionnaires des mutuelles de santé.",
      ],
    },
    {
      title:
        "Programme National de Communication pour la Promotion de la Santé (PNCPS)",
      mission:
        "Développer et mettre en œuvre des stratégies de communication pour promouvoir la santé et le bien-être des populations.",
      attributions: [
        "Concevoir des campagnes de communication en santé publique.",
        "Sensibiliser aux comportements favorables à la santé.",
        "Assurer la diffusion des messages de prévention à travers divers canaux.",
        "Renforcer les capacités des acteurs de la communication en santé.",
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
            Programmes de lutte contre les maladies non transmissibles et
            chroniques
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
              Programmes de lutte contre les maladies non transmissibles et
              chroniques
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
                      <span className="text-lg text-white">{item.title}</span>
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
                          {item.mission}
                        </p>
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
