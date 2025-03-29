import { Container, Section } from "@/components/craft";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function DoubleCards() {
    return (
        <Section className='container section text-white'>
            <Container className="flex flex-col lg:flex-row w-full">
                <div className="bg-blueSky p-16 w-full lg:w-1/2 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl space-y-12">
                    <h2 className="text-3xl lg:text-5xl font-bold uppercase">
                        Hygiène 
                    </h2>
                    <p className="max-w-md">
                    La Prévoyance Sociale est un pilier essentiel du Ministère de la Santé Publique, Hygiène et Prévoyance Sociale, visant à garantir la protection des citoyens contre les risques liés à la maladie, à la vieillesse, aux accidents du travail et à d'autres situations pouvant affecter leur bien-être socio-économique.
                    </p>

                    <Button variant={"outline"} className="mt-8 bg-transparent flex items-center gap-4">
                        <span>En savoir plus</span>    <ArrowRight />

                    </Button>
                </div>
                <div className="bg-green p-16 w-full md:w-1/2 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl space-y-12">
                    <h2 className="text-3xl lg:text-5xl font-bold uppercase">
                        Prévoyance Sociale
                    </h2>
                    <p className="max-w-md">
                    L’Hygiène est un levier fondamental de la prévention en santé publique. Le ministère s’assure de l’application des normes et mesures sanitaires pour prévenir les maladies et améliorer la qualité de vie des populations.
                    </p>

                    <Button variant={"outline"} className="mt-8 bg-transparent flex items-center gap-4">
                        <span>En savoir plus</span>    <ArrowRight />

                    </Button></div>
            </Container>
        </Section>
    )
}

export default DoubleCards