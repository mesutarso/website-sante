import { Container } from "@/components/craft"
import Image from "next/image"
import MINISTRE from '@/public/ministre-banner.jpg'



export default function Hero() {
    return (
        <div className="relative w-full min-h-[600px]">

            <Image
                src={MINISTRE}
                fill
                alt={'ministre delegue'}
                className={'object-cover m-0 '}
            />

            <div className="absolute top-0 left-0 w-full h-full flex items-center  text-white">
                <>
                    <Container className="grid grid-cols-1 md:grid-cols-2 w-full">
                        <div>
                            <h1 className="text-7xl font-bold mb-4 uppercase font-rocgrotesk">   Dr. Samuel Roger KAMBA </h1>
                            <p className="text-lg max-w-lg">Ministère de la Santé Publique, Hygiène et Prévoyance Sociale </p>
                        </div>

                    </Container>
                </>
            </div>

        </div>
    )
}