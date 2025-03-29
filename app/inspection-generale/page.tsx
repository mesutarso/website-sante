import React from "react";
import { Container, Section } from "@/components/craft";

function page() {
  return (
    <div className="bg-[#e6f5f3]">
      <Section>
        <Container>
          <div className="">
            <h1 className="text-blue text-4xl font-bold mt-24 mb-20 text-center ">
              <span className="block font-rocgrotesk uppercase text-[6rem]">
                Inspection generale
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-center mb-10 text-blue ">
              L'Inspection générale de la Santé a été créée en 2017 pour
              encadrer, enquêter, contrôler et sanctionner le cas échéant les
              cas d'irrégularités constatés au sein des services et organes du
              Ministère de la Santé. Il est un outil de bonne gouvernance dont
              la mission consiste à garantir l'intégrité des services et
              systèmes de santé.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default page;
