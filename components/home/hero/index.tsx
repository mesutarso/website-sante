import { Section } from "@/components/craft";
import HeroCarousel from "./carousel";
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { slidersQuery } from "@/wordpress/requests/sliders";
import { getQueryClient } from "@/components/providers/react-query/client";


async function Hero() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery(slidersQuery)
    const dehydratedState = dehydrate(queryClient)
    return (
        <HydrationBoundary state={dehydratedState}>
            <div className={'relative bg-blue  '}>
                <Section className="w-full">
                    <HeroCarousel />
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
        </HydrationBoundary>
    )
}

export default Hero
