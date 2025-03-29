'use client'
import { useRef } from "react"
import { Section, Container } from "@/components/craft"
import Image from "next/image"
import { motion, useInView } from "motion/react"

type DetailsArticlesProps = {
    article: any
}

function DetailsArticles({ article }: DetailsArticlesProps) {
    const dateRef = useRef(null)
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const imageRef = useRef(null)
    const infoRef = useRef(null)
    const contentRef = useRef(null)

    const dateInView = useInView(dateRef, { once: true })
    const titleInView = useInView(titleRef, { once: true })
    const descriptionInView = useInView(descriptionRef, { once: true })
    const imageInView = useInView(imageRef, { once: true })
    const infoInView = useInView(infoRef, { once: true })
    const contentInView = useInView(contentRef, { once: true })

    return (
        <div>
            <div className="bg-blue min-h-[600px] text-white p-6 relative">
                <Section>
                    <Container>
                        {/* Date */}
                        <motion.div
                            ref={dateRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={dateInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="bg-white text-blue text-sm font-semibold py-1 px-3 rounded-full inline-block mb-6"
                        >
                            {article?.date}
                        </motion.div>

                        {/* Title and subtitle */}
                        <motion.h1
                            ref={titleRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={titleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl font-bold mb-4 max-w-3xl"
                        >
                            {article?.title}
                        </motion.h1>
                        <motion.p
                            ref={descriptionRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl mb-8 max-w-2xl line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: article?.description }}
                        />
                    </Container>
                </Section>
            </div>

            <div className="bg-white ">
                <Section>
                    <Container className="relative -top-44 z-10">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Image */}
                            <motion.div
                                ref={imageRef}
                                initial={{ opacity: 0, x: -20 }}
                                animate={imageInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="md:w-2/3"
                            >
                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image
                                        src={article?.image}
                                        alt="Group of officials at the Secretariat General"
                                        fill
                                        className="object-cover"
                                        placeholder="blur"
                                        blurDataURL={article?.image}
                                    />
                                </div>
                            </motion.div>

                            {/* Publication info */}
                            <motion.div
                                ref={infoRef}
                                initial={{ opacity: 0, x: 20 }}
                                animate={infoInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="md:w-1/3"
                            >
                                <div className="bg-[#F3F5F7] text-blue p-4 rounded-lg">
                                    <h2 className="font-bold mb-2">Date de publication</h2>
                                    <p>{article?.date}</p>
                                    <h2 className="font-bold mt-4 mb-2">Cellule Communication</h2>
                                </div>
                            </motion.div>
                        </div>

                        {/* Article text */}
                        <motion.div
                            ref={contentRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={contentInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="mt-8 text-lg prose"
                        >
                            <div dangerouslySetInnerHTML={{ __html: article?.content }} />
                        </motion.div>
                    </Container>
                </Section>
            </div>
        </div>
    )
}

export default DetailsArticles