import { Container, Section } from "@/components/craft";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Sliders from "./sliders";

function Hero() {
    return (
        <div className={'relative min-h-[500px] md:min-h-[700px] bg-blue'}>
            <Section>
                <Container className="flex flex-col items-start justify-start min-h-[400px] md:min-h-[600px]">
                    <Sliders />
                </Container>
            </Section>

            <div className={
                'absolute -bottom-[50px] left-4 right-4 md:left-auto md:right-[50px] ' +
                'bg-white z-20 w-auto md:w-[400px] shadow p-3 md:p-4 rounded-xl'
            }>
                <div className="event-cat text-blue flex mb-2 md:mb-4">
                    <p className={'bg-gray-200 px-2 py-1 rounded-md text-xs font-semibold uppercase'}>Evenement / Lundi 7 Avril 2025</p>
                </div>
                <div>
                    <p className={'font-bold uppercase text-xs md:text-sm text-blue'}>
                        Journée mondiale de la santé
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
