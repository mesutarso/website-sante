"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/craft"
import { useSuspenseQuery } from '@tanstack/react-query'
import { slidersQuery } from "@/wordpress/requests/sliders"
import { motion } from "motion/react"



export default function HeroCarousel() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const { data } = useSuspenseQuery(slidersQuery)





    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handleDotClick = (index: number) => {
        api?.scrollTo(index)
    }

    return (
        <div className="space-y-8 py-10 px-4 md:px-6">
            <Container >
                <Carousel setApi={setApi} className="w-full mb-8">
                    <CarouselContent className="min-h-[400px] items-center justify-center">
                        {data.map((slide: any, index: number) => (
                            <CarouselItem key={index} className=" ">
                                <div className="p-1">
                                    <div className="flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden text-white">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="flex flex-col justify-center p-8 space-y-4 w-full md:w-1/2"
                                        >
                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                                className="text-3xl md:text-4xl md:line-clamp-3 line-clamp-4 font-bold"
                                            >
                                                {slide.title}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                                className="line-clamp-4"
                                                dangerouslySetInnerHTML={{ __html: slide.description }}
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.8 }}
                                                className="pt-4"
                                            >
                                                <Button className="bg-red text-white">
                                                    <Link href={slide.link} className="flex items-center gap-2">
                                                        <ArrowRight />
                                                        En savoir plus
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="relative min-h-[300px] md:min-h-[400px] bg-transparent w-full md:w-1/2 rounded-2xl"
                                        >
                                            <Image
                                                src={slide.image}
                                                alt={`Slide ${index + 1}`}
                                                fill
                                                className="object-cover rounded-2xl"
                                                placeholder="blur"
                                                blurDataURL={slide.image}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="md:-left-10 -left-2" />
                    <CarouselNext className="md:-right-12 -right-2" />
                </Carousel>


                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-red scale-125" : "bg-white hover:bg-muted-foreground/50"
                                }`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Aller au slide ${index + 1}`}
                        />
                    ))}
                </div>


            </Container>

        </div>
    )
}

