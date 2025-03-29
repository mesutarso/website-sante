import { Container, Section } from "@/components/craft";
import Image from "next/image";
import MINISTRE from "@/public/images/Ministre___biogr.jpg";

function MotMinistre() {
  return (
    <div className={"bg-[#F9F9F5]"}>
      <Section className={"py-16"}>
        <Container className={""}>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 gap-8 items-center "}
          >
            <div className={""}>
              <div className={"mb-8"}>
                <h1 className={"heading uppercase lg:max-w-1xl"}>
                  Dr. <br /> Samuel Roger KAMBA <br />
                </h1>
                <p className="text-2xl">Ministre</p>
              </div>
              <p className={"mb-16"}>
                La santé ne peut plus être un luxe réservé à quelques-uns.
                <br />
                La Couverture Santé Universelle est un impératif, un droit pour
                chaque Congolais.
                <br /> Notre engagement est clair : réformer notre système de
                santé pour qu’il réponde aux besoins de tous, sans distinction
                de revenu ou de statut social.
                <br /> Cela signifie investir dans nos infrastructures, former
                et déployer efficacement nos professionnels de santé, et
                garantir un accès équitable aux soins sur l’ensemble du
                territoire.
              </p>
              <p className={"flex items-center font-bold"}>
                <span className={"w-[10px] h-[80px] bg-black mr-4"}></span>
                <span>
                  {" "}
                  “Je prends l'engagement de continuer à œuvrer davantage pour
                  le bien-être de la population congolaise selon sa vision de la
                  Couverture Santé universelle.”
                </span>
              </p>
            </div>
            <div>
              <Image
                src={MINISTRE}
                width={800}
                height={751}
                alt={"Logo"}
                className={"object-cover m-0 "}
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default MotMinistre;
