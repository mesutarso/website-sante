import { ArrowDown } from "lucide-react"
import { Container, Section } from "../craft"
import Image from "next/image"
import BIOGRAPHY from '@/public/images/Ministre___biogr.jpg'

function Biography() {
    return (
        <Section>
            <Container className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-blue">
                        Dr. Samuel Roger KAMBA
                    </h2>
                    <p>
                        Samuel Roger Kamba Mulamba est un médecin et homme politique congolais. Il est l&apos;actuel ministre de la Santé publique, de l&apos;Hygiène et de la Prévention de la république démocratique du Congo depuis le 29 mars 2023. <br />
                        Il est médecin pendant plus de 30 ans dont 22 ans en pédiatrie. <br /> <br /> Il est également formateur en réanimation pédiatrique et spécialisé en gestion de programme de santé publique, gestion de haut niveau des programmes de santé communautaire et renforcement des capacités des intervenants en santé3. Il a été conseiller spécial du président en charge du déploiement de la couverture santé universelle en république démocratique du Congo, ainsi que coordonnateur du groupe de travail présidentiel de la riposte contre la Covid-19.
                    </p>
                   
                    <a 
                        href="/docs/biographie__ministre.pdf"
                        target="_blank"
                        className="mt-4 bg-blue flex items-center gap-4 px-4 py-2 rounded-md text-white hover:bg-blue/90 transition-colors inline-flex"
                    >
                        <span>Voir le CV</span>   <ArrowDown />
                    </a>    

                </div>
                <div>
                    <Image
                        src={BIOGRAPHY}
                        width={500}
                        height={400}
                        alt={'ministre delegue'}
                        className={'object-cover m-0 '}
                    />
                </div>
            </Container>
        </Section>
    )
}

export default Biography