'use client'
import { useRef } from "react";
import { CircleArrowRight } from "lucide-react";
import { Container, Section } from "@/components/craft";
import { motion, useInView } from "motion/react";

interface CooperationCategory {
  title: string;
  def: string;
  desc: string;
  color: string;
}

const categories: CooperationCategory[] = [
  {
    title: "INSP",
    def: "Institut National de la Santé Publique",
    desc: "L'Institut National de la Santé Publique (INSP) est une structure scientifique chargée de la recherche, de la formation et de l'analyse des politiques de santé en République Démocratique du Congo. Son rôle est d'appuyer le ministère de la Santé Publique, Hygiène et Prévoyance Sociale en produisant des données probantes pour orienter la prise de décision en matière de santé publique. Il contribue également à la surveillance épidémiologique et à la promotion des bonnes pratiques sanitaires.",
    color: "bg-blue",
  },
  {
    title: "FPS",
    def: "Fonds de Promotion de la Santé",
    desc: "Le Fonds de Promotion de la Santé (FPS) est un mécanisme de financement destiné à soutenir les programmes de prévention et de promotion de la santé en RDC. Il mobilise et gère des ressources financières pour des campagnes de sensibilisation, la lutte contre les maladies prioritaires et l'amélioration des conditions sanitaires de la population. Son objectif est de garantir un accès équitable aux soins préventifs et de renforcer la résilience du système de santé.",
    color: "bg-green",
  },
  {
    title: "FSS",
    def: "Fonds de Solidarité de Santé",
    desc: "Le Fonds de Solidarité de Santé (FSS) est un dispositif financier mis en place pour assurer la couverture des soins de santé aux populations vulnérables et à faible revenu. Il repose sur le principe de la mutualisation des ressources et vise à réduire les inégalités d'accès aux soins médicaux en prenant en charge une partie des coûts des prestations de santé. Le FSS joue un rôle central dans la mise en œuvre de la Couverture Santé Universelle (CSU) en RDC.",
    color: "bg-yellow",
  },
  {
    title: "ARC\u00A0CSU",
    def: "utorité de Régulation et de Contrôle de la Couverture Santé Universelle",
    desc: "L'ARC-CSU est l'organe chargé de la supervision et du contrôle de la mise en œuvre de la Couverture Santé Universelle (CSU) en RDC. Elle veille à la régulation des acteurs impliqués dans le financement, la gestion et la prestation des services de santé dans le cadre de la CSU. L'ARC-CSU garantit la transparence, l'efficience et l'équité du système en s'assurant que les bénéficiaires accèdent réellement aux soins de qualité prévus par la réforme.",
    color: "bg-brown",
  },
  {
    title: "ANICNS",
    def: "Agence Nationale de l'Ingenierie Clinique, de l'information et de l'Informatique de la Santé",
    desc: "L'Agence Nationale de l'Ingénierie Clinique, de l'Information et de l'Informatique de la Santé (ANICNS) est une structure spécialisée dans l'optimisation des infrastructures hospitalières et l'innovation technologique dans le secteur de la santé. Elle assure la modernisation des équipements médicaux, le développement des systèmes d'information sanitaire et la digitalisation des services de santé pour améliorer l'efficacité et la qualité des soins en RDC.",
    color: "bg-blueSky",
  },
  {
    title: "ANAMED ",
    def: "Agence Nationale des Médicaments Essentiels et des Produits de Santé.",
    desc: "Garantit la disponibilité, la qualité et la distribution des médicaments essentiels en RDC.",
    color: "bg-blue",
  },
  {
    title: "ACOREP",
    def: "Autorité Congolaise de Régulation Pharmaceutique",
    desc: "Veille à la qualité, à la sécurité et à l’efficacité des médicaments sur tout le territoire national.",
    color: "bg-green",
  },
];

export default function CooperationGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={"bg-[#F9F9F5]"} ref={ref}>
      <Section className={"py-16"}>
        <Container className={""}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-[#1a2f4b]"
          >
            Organe de mise en oeuvres de la Couverture Santé Universselle
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${category.color} p-6 rounded-3xl flex flex-col justify-between min-h-[300px]`}
              >
                <CircleArrowRight
                  className="text-white w-10 h-10 "
                  aria-hidden="true"
                  strokeWidth={0.5}
                />
                <h2 className="text-white font-bold mt-auto">
                  {category.title.split(" ").map((word, i) => (
                    <span key={i} className="block font-rocgrotesk text-2xl">
                      {word}
                    </span>
                  ))}
                </h2>
                <p className="text-white font-bold text-md mb-6">
                  {category.def}
                </p>
                <br />
                <p className="text-white text-sm line-clamp-4">{category.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
