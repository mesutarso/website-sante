import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { getQueryClient } from "@/components/providers/react-query/client";
import { allArticlesQuery } from "@/wordpress/requests/articles";
import AllArticles from "@/components/articles/all-articles";
interface ArticleProps {
  image: string;
  title: string;
  date: string;
}

const data: ArticleProps[] = [
  {
    image: "/images/image.png",
    title: "L'ONU adopte une résolution sur la coopération des Casques ...",
    date: "20 Novembre 2024",
  },
  {
    image: "/images/image.png",
    title: "L'ONU adopte une résolution sur la coopération des Casques ...",
    date: "20 Novembre 2024",
  },
  {
    image: "/images/image.png",
    title: "L'ONU adopte une résolution sur la coopération des Casques ...",
    date: "20 Novembre 2024",
  },
];

async function Actualites() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(allArticlesQuery)
  const dehydratedState = dehydrate(queryClient)
  return (
    <HydrationBoundary state={dehydratedState}>
      <AllArticles />
    </HydrationBoundary>
  );
}

export default Actualites;
