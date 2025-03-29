'use client'
import { Section, Container } from "@/components/craft";
import CardArticle from "./Card";
import FirstCard from "./fisrt-card";
import { useSuspenseQuery } from '@tanstack/react-query'
import { allArticlesQuery } from "@/wordpress/requests/articles"
import { useRef } from "react";
import { useInView, motion } from "motion/react";

const AllArticles = () => {
    const { data } = useSuspenseQuery(allArticlesQuery)
    const firstSectionRef = useRef(null);
    const secondSectionRef = useRef(null);
    const isFirstSectionInView = useInView(firstSectionRef, { once: true, margin: "-100px" });
    const isSecondSectionInView = useInView(secondSectionRef, { once: true, margin: "-100px" });

    return <div>
        <motion.div
            ref={firstSectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isFirstSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Section className="bg-blue w-full text-white p-6">
                <Container>
                    <FirstCard data={data[0]} />
                </Container>
            </Section>
        </motion.div>

        <motion.div
            ref={secondSectionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isSecondSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-yellowSky"
        >
            <Section>
                <Container>
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        <h2 className="text-2xl font-bold max-w-2xl text-blue">
                            Découvrez les dernières nouvelles de la coopération
                            internationale et Francophonie
                        </h2>
                    </div>
                    {/* <div className="flex space-x-4 mb-8">
                <Select>
                  <SelectTrigger className="w-[180px] bg-transparent border-blue text-blue">
                    <SelectValue placeholder="Categorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="cooperation">Coopération</SelectItem>
                    <SelectItem value="francophonie">Francophonie</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] bg-transparent border-blue text-blue">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les dates</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-24">
                        {data.slice(1).map((item: any, key: number) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isSecondSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: key * 0.1 }}
                            >
                                <CardArticle
                                    image={item.image}
                                    title={item.title}
                                    date={item.date}
                                    slug={item.link}
                                />
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>
        </motion.div>
    </div>;
};

export default AllArticles;