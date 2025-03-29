'use client'

import { articlesQuery } from "@/wordpress/requests/articles";
import { useSuspenseQuery } from '@tanstack/react-query'
import CardArticle from "./Card";

export default function LatestArticles() {
    const { data } = useSuspenseQuery(articlesQuery)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
            {
                data.map((article: any) => (
                    <CardArticle
                        key={article.id}
                        title={article.title}
                        date={article.date}
                        image={article.image}
                        slug={article.link}
                    />
                ))
            }
        </div>
    )
}

