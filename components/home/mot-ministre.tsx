'use client'
import { Container, Section } from "@/components/craft";
import Image from "next/image";
import MINISTRE from "@/public/images/Ministre___biogr.jpg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function MotMinistre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className={"bg-[#F9F9F5]"} ref={ref}>
      <Section className={"py-16"}>
        <Container className={""}>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 gap-8 items-center "}
          >
            <div className={""}>
              <motion.div
                className={"mb-8"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className={"heading uppercase lg:max-w-1xl"}>
                  Dr. <br /> Samuel Roger KAMBA <br />
                </h1>
                <p className="text-2xl">Ministre</p>
              </motion.div>
              <motion.p
                className={"mb-16"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                La santé ne peut plus être un luxe réservé à quelques-uns.
                <br />
                La Couverture Santé Universelle est un impératif, un droit pour
                chaque Congolais.
                <br /> Notre engagement est clair : réformer notre système de
                santé pour qu'il réponde aux besoins de tous, sans distinction
                de revenu ou de statut social.
                <br /> Cela signifie investir dans nos infrastructures, former
                et déployer efficacement nos professionnels de santé, et
                garantir un accès équitable aux soins sur l'ensemble du
                territoire.
              </motion.p>
              <motion.p
                className={"flex items-center font-bold"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className={"w-[10px] h-[80px] bg-black mr-4"}></span>
                <span>
                  {" "}
                  "Je prends l'engagement de continuer à œuvrer davantage pour
                  le bien-être de la population congolaise selon sa vision de la
                  Couverture Santé universelle."
                </span>
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src={MINISTRE}
                width={800}
                height={751}
                alt={"Logo"}
                className={"object-cover m-0 rounded-2xl"}
              />
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default MotMinistre;
