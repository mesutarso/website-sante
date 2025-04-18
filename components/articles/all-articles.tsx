'use client'
import { Section, Container } from "@/components/craft";
import CardArticle from "./Card";
import FirstCard from "./fisrt-card";
import { useQuery, } from '@tanstack/react-query'
import { useState } from "react";
import { motion } from "motion/react";
import { getSimplePosts } from "@/lib/wordpress";
import { Skeleton } from "../ui/skeleton";

const AllArticles = () => {
    const [retryCount, setRetryCount] = useState(0);

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['articles'],
        queryFn: async () => {
            try {
                // Augmenter le timeout pour la requête
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 secondes

                const result = await getSimplePosts({ per_page: 100 });

                clearTimeout(timeoutId);
                return result;
            } catch (err) {
                console.error("Erreur lors du chargement des articles:", err);
                throw err;
            }
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        retry: 2,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 10000),
    });

    if (isLoading || !data) {
        return (
            <div>
                <Section className="bg-blue w-full text-white p-6">
                    <Container>
                        <div className="h-[400px]">
                            <Skeleton className="w-full h-full" />
                        </div>
                    </Container>
                </Section>
                <Section className="bg-yellowSky">
                    <Container>
                        <div className="mt-12">
                            <Skeleton className="h-8 w-2/3" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-24">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="space-y-3">
                                    <Skeleton className="h-48 w-full" />
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            </div>
        )
    }

    if (isError) {
        return (
            <Section className="bg-yellowSky py-12">
                <Container>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-blue mb-4">
                            Impossible de charger les articles
                        </h2>
                        <p className="text-gray-700 mb-6">
                            {error instanceof Error
                                ? `Erreur: ${error.message}`
                                : "Timeout ou erreur de connexion au serveur."}
                        </p>
                        <button
                            onClick={() => {
                                setRetryCount(prev => prev + 1);
                                refetch();
                            }}
                            className="px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Réessayer
                        </button>
                    </div>
                </Container>
            </Section>
        );
    }

    // Vérifier si les données sont vides
    if (!data.length) {
        return (
            <Section className="bg-yellowSky py-12">
                <Container>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-blue mb-4">
                            Aucun article disponible
                        </h2>
                        <p className="text-gray-700">
                            Aucun article n'a été trouvé pour le moment.
                        </p>
                    </div>
                </Container>
            </Section>
        );
    }

    return <div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Section className="bg-blue w-full text-white p-6">
                <Container>
                    <FirstCard data={data[0]} />
                </Container>
            </Section>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-24">
                        {data.slice(1).map((item: any, key: number) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + key * 0.1 }}
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