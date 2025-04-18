import { CircleArrowRight } from "lucide-react";
import { Container, Section } from "@/components/craft";
import Link from "next/link";

interface CooperationCategory {
  title: string;
  desc: string;
  color: string;
}

const categories: CooperationCategory[] = [
  { title: "Direction Generale de Lutte contre la Maladie", desc: "La DGLM conçoit et met en œuvre des politiques, des stratégies et des normes pour surveiller les épidémies, les laboratoires et l'hygiène publique. Elle coordonne les programmes de lutte contre les maladies et promeut les pratiques innovantes pour améliorer la qualité de vie.", color: "bg-blueSky" },
  { title: "Direction Generale de l organisation et de Gestion des Services et Soins de Sante", desc: "La DGOGSS conçoit et met en œuvre des politiques et des stratégies pour l'organisation et la gestion des soins de santé, tout en gérant le système national d'information sanitaire. Elle soutient également les projets d'établissement et suit la mise en œuvre des politiques relatives aux soins de santé.", color: "bg-green" },
  { title: "Direction Financiere et Administrative", desc: "Elle assure l'engagement comptable, la liquidation et l'ordonnancement des dépenses du budget du Ministère de la Santé. Elle élabore en collaboration avec les services internes les prévisions, tient et gère l'inventaire des biens meubles et immeubles et appuie les services du Minist", color: "bg-blue" },
  { title: "Direction des ressources humaines", desc: "Conformément à la stratégie de gestion intégrée de gestion des ressources humaines telles qu'édictées par le Ministère de la Fonction Publique, la Direction des Ressources Humaines assure le développement des compétences des ressources humaines du Secrétariat général à la Santé. Elle contribue à l'élaboration des politiques et des stratégies, veille à l'exécution des textes règlementaires et législatifs relatifs à la gestion des ressources humaines de l'Etat. Afin de promouvoir le dialogue et la communication interpersonnelle au sein du Secrétariat général à la Santé, elle promeut des activités culturelles, sportives et ludiques et met en place des conditions optimales de travail pour les agents. Elle assure, en collaboration avec les services compétents du Ministère de la Fonction Publique, la mise en oeuvre du cadre et des structures organiques ainsi que du référentiel des emplois. ", color: "bg-blueMin" },
  { title: "Direction des etudes et planification", desc: "La DEP élabore les politiques et les stratégies sectorielles, gère les données statistiques et la documentation spécialisée du Ministère de la Santé, réalise des études prospectives et assure le suivi de la mise en œuvre de la réforme. Elle assure également la gestion du programme d’investissement public, des projets prioritaires et du suivi-évaluation du CDMT sectoriel. ", color: "bg-blueMin" },
  { title: "Direction Archives et Nouvelles Technologies de L’information et de Communication", desc: "La DANTIC est responsable de la collecte, gestion et conservation des documents, informations et données provenant des différents services du Ministère. Elle gère également la bibliothèque, la photothèque et la filmothèque, ainsi que la reprographie, l'informatisation  ", color: "bg-blueMin" },
];

export default function page() {
  return (
    <div className={"bg-white"}>
      <Section className="md:pb-28">
        <Container className={""}>
          <div className="text-center mb-40 ">
            <h1 className="text-5xl font-black text-[#1a2f4b] ">
              Directions Centrales
            </h1>
            <p className="mt-3 max-w-xl mx-auto">Ci-dessous la liste des directions centrales du Ministère de la Santé.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((category, index) => (
              <Link key={index} href={``}>
                <div

                  className={`${category.color} p-6 rounded-3xl flex flex-col justify-between min-h-[350px]`}
                >
                  <CircleArrowRight
                    className="text-white w-10 h-10 "
                    aria-hidden="true"
                    strokeWidth={0.5}
                  />
                  <h2 className="text-white text-xl font-bold mt-auto">
                    <span className="block font-rocgrotesk uppercase text-xl mb-2">
                      {category.title}
                    </span>
                  </h2>
                  <p className="text-white line-clamp-4 text-sm">
                    {category.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
