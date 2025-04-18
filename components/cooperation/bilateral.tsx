import { CircleArrowRight } from "lucide-react";
import { Container, Section } from "@/components/craft";
import Link from "next/link";

interface CooperationCategory {
  title: string;
  desc: string;
  color: string;
}

const categories: CooperationCategory[] = [
  { title: "Le Cabinet du Ministre", desc: "Le Ministre et les membres du Cabinet", color: "bg-blueSky" },
  { title: "Le Secretariat General", desc: "Le membres du Secrétariat Général du Ministère", color: "bg-green" },
  { title: "Inspection Generale", desc: "L'inspection générale du Ministère", color: "bg-blue" },
  { title: "Directions Generales", desc: "Les directions centrales du Ministère", color: "bg-blueMin" },
];

export default function BilateralGrid() {
  return (
    <div className={"bg-white"}>
      <Section className="md:pb-28">
        <Container className={""}>
          <div className="text-center mb-40 ">
            <h1 className="text-5xl font-black text-[#1a2f4b]">
              Organisation
            </h1>
            <p className="mt-3 max-w-xl mx-auto">Le Ministère de la Santé Publique, Hygiène et prévoyance sociale de la République Démocratique du Congo est constitué de quatre principales entités.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
                    <span className="block font-rocgrotesk uppercase text-3xl">
                      {category.title}
                    </span>
                  </h2>
                  <p className="text-white">
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
