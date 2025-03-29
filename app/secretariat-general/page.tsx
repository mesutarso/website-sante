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
                Le Secretariat General
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-center mb-10 text-blue ">
              Le Secrétariat Général à la Santé, planjfie, coordonne et
              supervise les activités en appui au Ministère de la Santé qui en
              fixe les orientations générales. Cadre de liaison entre le
              Cabinet, l'Administration de la Santé et les partenaires, il
              coordonne la direction des services décentralisés en tenant compte
              des orientations politiques et budgétaires tracées par le
              Ministère.{" "}
            </p>
            <p className="max-w-4xl mx-auto text-center text-blue ">
              Les fonctions de Secrétaire général sont exercées par le Dr.
              Sylvain Yuma Ramazani. Il a dirigé le Programme national de
              transfusion sanguine de 2006 à 2016 avant de devenir Directeur de
              Cabinet au Ministère de la Santé de 2016 à 2018. Docteur en
              médecine, chirurgie et accouchement de l'Université de Kinshasa en
              1998, il a obtenu un Diplôme d’Etudes Spécialisées en
              Immuno-hematologie et Transfusion de l’Université de Liège en
              Belgique en 2005 avant de décrocher, trois ans plus tard, un
              Master en Santé Publique à l'Université de Kinshasa.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default page;
