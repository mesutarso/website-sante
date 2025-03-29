import React from "react";
import { Container, Section } from "@/components/craft";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

function Representation() {
  return (
    <div className="bg-yellowSky min-h-[350px]">
      <Section>
        <Container>
          <Link href={``}>
            <div className="bg-blue w-full h-auto min-h-[150px] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between">
              <h2 className="uppercase text-white font-extrabold text-xl md:text-2xl md:w-[80%] mb-4 md:mb-0">
                Representations diplomatiques de la republique democratique du
                Congo
              </h2>

              <CircleArrowRight
                className="text-white w-8 h-8 md:w-12 md:h-12"
                aria-hidden="true"
                strokeWidth={0.5}
              />
            </div>
          </Link>
        </Container>
      </Section>
    </div>
  );
}

export default Representation;
