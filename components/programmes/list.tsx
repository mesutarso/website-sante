import { CircleArrowRight } from "lucide-react";
import { Container, Section } from "@/components/craft";
import Link from "next/link";

interface Programme {
  title: string;
  href: string;
  color: string;
}

const categories: Programme[] = [
  { title: "Programmes de lutte contre les maladies transmissibles", color: "bg-blueSky", href: "/programme/programmes-de-lutte-contre-les-maladies-transmissibles" },
  { title: "Programmes de lutte contre les maladies non transmissibles et chroniques",color: "bg-green", href: "/programme/programmes-de-lutte-contre-les-maladies-non-transmissibles-et-chroniques" },
  { title: "Programmes de prévention et promotion de la santé", color: "bg-blue", href: "/programme/programmes-de-prevention-et-promotion-de-la-sante" },
  { title: "Programmes liés à la nutrition et aux médicaments", color: "bg-[#f6d55c]", href: "/programme/programmes-lies-a-la-nutrition-et-aux-medicaments" },
  { title: "Programmes d'urgence et de gestion des catastrophes", color: "bg-[#28232d]", href: "/programme/programmes-durgence-et-de-gestion-des-catastrophes" },
  { title: "Programmes spécialisés et instituts de recherche", color: "bg-blueMin", href: "/programme/programmes-specialises-et-instituts-de-recherche" },
];

export default function ProgrammelGrid() {
  return (
    <div className={"bg-white"}>
      <Section className="md:pb-28">
        <Container className={""}>
          <div className="text-center mb-20 ">
            <p className="mt-3 max-w-5xl mx-auto text-[#1a2f4b]">Le Ministère de la Santé Publique, Hygiène et Prévoyance Sociale de la République Démocratique du Congo (RDC) coordonne un vaste réseau de programmes et d’institutions stratégiques visant à assurer la protection et l’amélioration de la santé de la population congolaise. Ces programmes, répartis en plusieurs axes thématiques, couvrent l’ensemble des enjeux sanitaires du pays, de la lutte contre les maladies transmissibles et non transmissibles à la promotion de la santé communautaire, en passant par le renforcement des capacités du système de santé et la gestion des crises sanitaires.</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="group">
                <div
                  className={`${category.color} p-8 rounded-3xl flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <CircleArrowRight
                    className="text-white w-10 h-10 group-hover:translate-x-2 transition-transform duration-300"
                    aria-hidden="true"
                    strokeWidth={0.5}
                  />
                  <h2 className="text-white mt-auto">
                    <span className="block uppercase text-2xl md:text-3xl font-rocgrotesk font-bold leading-tight">
                      {category.title}
                    </span>
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
