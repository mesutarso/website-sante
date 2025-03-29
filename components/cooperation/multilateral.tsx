import { CircleArrowRight } from "lucide-react";
import { Container, Section } from "@/components/craft";
import Link from "next/link";

interface CooperationCategory {
  title: string;
  color: string;
}

const categories: CooperationCategory[] = [
  { title: "SOMMETS", color: "bg-yellow" },
  { title: "CONFERENCE", color: "bg-blue" },
  { title: "COMMISSION MIXTE", color: "bg-blueSky" },
  { title: "LES INVESTISSEMENT", color: "bg-green" },
  { title: "FORUM", color: "bg-dark" },
];

export default function MultilateralGrid() {
  return (
    <div className={"bg-[#F6F8FC]"}>
      <Section className="md:pb-28">
        <Container className={""}>
          <div className="text-center mb-40 ">
            <h1 className="text-5xl font-black text-[#1a2f4b]">
              EN SAVOIR PLUS
            </h1>
            <p className="mt-3">
              Pour en savoir plus, consultez les pages ci-dessous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {categories.slice(2).map((category, index) => (
              <Link key={index} href={``} className="w-full">
                <div
                  className={`${category.color} p-6 rounded-3xl flex flex-col justify-between min-h-[250px] md:min-h-[350px]`}
                >
                  <CircleArrowRight
                    className="text-white w-10 h-10 "
                    aria-hidden="true"
                    strokeWidth={0.5}
                  />
                  <h2 className="text-white text-xl font-bold mt-auto">
                    {category.title.split(" ").map((word, i) => (
                      <span key={i} className="block font-rocgrotesk text-4xl md:text-5xl">
                        {word}
                      </span>
                    ))}
                  </h2>
                </div>
              </Link>
            ))}

            <Link href={``}>
              <div
                className={`${categories[1].color} p-6 rounded-3xl flex flex-col justify-between min-h-[350px]`}
              >
                <CircleArrowRight
                  className="text-white w-10 h-10 "
                  aria-hidden="true"
                  strokeWidth={0.5}
                />
                <h2 className="text-white text-xl font-bold mt-auto">
                  {categories[1].title.split(" ").map((word, i) => (
                    <span key={i} className="block font-rocgrotesk text-5xl">
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            </Link>

            <Link
              href={""}
              className={`${categories[0].color} p-6 rounded-3xl flex flex-col justify-between col-span-2 min-h-[350px]`}
            >
              <CircleArrowRight
                className="text-white w-10 h-10"
                aria-hidden="true"
                strokeWidth={0.5}
              />
              <h2 className="text-white text-xl font-bold mt-auto">
                {categories[0].title.split(" ").map((word, i) => (
                  <span key={i} className="block font-rocgrotesk text-5xl">
                    {word}
                  </span>
                ))}
              </h2>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
