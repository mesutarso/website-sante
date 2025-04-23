'use client'

import { articlesQuery } from "@/wordpress/requests/articles";
import { useQuery } from '@tanstack/react-query'
import CardArticle from "./Card";
import { Skeleton } from "../ui/skeleton";
import { getSimplePosts } from "@/lib/wordpress";


export default function LatestArticles() {
    const { data, isLoading } = useQuery({
        queryKey: ['articles'],
        queryFn: () => getSimplePosts({ per_page: 4 })
    })

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <Skeleton className="h-48 w-full rounded-lg" />
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
            {
                data?.map((article: any) => (
                    <CardArticle
                        key={article.id}
                        title={article.title}
                        date={article.date}
                        image={article?.image || "/images/prevoyance.jpeg"}
                        slug={article.slug}
                    />
                ))
            }
        </div>
    )
}

