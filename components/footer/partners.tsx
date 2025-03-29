import { Container, Section } from "../craft";
import USAID from "@/public/partners/cdc.png";
import BM from "@/public/partners/unicef.png";
import EU from "@/public/partners/gavi.png";
import FMI from "@/public/partners/usaid.png";
import JAPON from "@/public/partners/fond-mondial.png";
import JICA from "@/public/partners/oms.png";

import Image from "next/image";

function Partners() {
    const partners = [USAID, BM, EU, FMI, JAPON, JICA,]
    return (
        <Section>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {partners.map((partner, index) => (
                        <div key={index} className="w-full h-[100px] flex items-center justify-center">
                            <Image
                                src={partner}
                                width={100}
                                height={100}
                                alt={'Logo'}
                                className={'object-cover m-0 '}
                            />
                        </div>
                    ))}
                </div>
            </Container>

        </Section>
    )
}

export { Partners }