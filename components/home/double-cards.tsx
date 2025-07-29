"use client";
import { Container } from "@/components/craft";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

function DoubleCards() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="text-white  border-1 border-t border-t-[#cfcfcf] border-y-none">
      <Container className="flex flex-col lg:flex-row w-full">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-blueSky p-16 w-full lg:w-1/2 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl space-y-12"
        >
          <h2 className="text-xl lg:text-3xl font-bold uppercase mb-2">Prévoyance Sociale</h2>
          <p className="max-w-md">
            La Prévoyance Sociale est un pilier essentiel du Ministère de la
            Santé Publique, Hygiène et Prévoyance Sociale, visant à garantir la
            protection des citoyens contre les risques liés à la maladie, à la
            vieillesse, aux accidents du travail et à d&apos;autres situations
            pouvant affecter leur bien-être socio-économique.
          </p>
          <Link href="/prevoyance-sociale">
            <Button
              variant={"outline"}
              className="mt-4 bg-transparent flex items-center gap-4"
            >
              <span>En savoir plus</span> <ArrowRight />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-green p-16 w-full md:w-1/2 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl space-y-12"
        >
          <h2 className="text-xl lg:text-3xl font-bold uppercase mb-2">
            Hygiène
          </h2>
          <p className="max-w-md">
            L&apos;Hygiène est un levier fondamental de la prévention en santé
            publique. Le ministère s&apos;assure de l&apos;application des normes et
            mesures sanitaires pour prévenir les maladies et améliorer la
            qualité de vie des populations.
          </p>
          <Link href="/hygene" className="pointer"> 
            <Button
                variant={"outline"}
                className="mt-4 bg-transparent flex items-center gap-4"
            >
                <span>En savoir plus</span> <ArrowRight />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}

export default DoubleCards;
