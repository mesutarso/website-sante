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

            <HeroCarousel />

        </HydrationBoundary>
    )
}

export default Hero
