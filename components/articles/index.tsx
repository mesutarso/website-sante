import { Container, Section } from "@/components/craft";
import { ArrowRight } from "lucide-react";
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { articlesQuery } from "@/wordpress/requests/articles";
import { getQueryClient } from "@/components/providers/react-query/client";
import { Button } from "../ui/button";
import LatestArticles from "./latest-articles";
import Link from "next/link";

async function ArticleSection() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(articlesQuery)
  const dehydratedState = dehydrate(queryClient)
  return (
    <HydrationBoundary state={dehydratedState}>
      <Section className={"relative bg-blue"}>
        <div >
          <Container className="flex flex-col justify-center ">
            <h1
              className={"heading uppercase mb-20 mt-10 text-white text-center"}
            >
              Actualités
            </h1>
            <Container>
              <LatestArticles />
            </Container>
          </Container>
          <div className="text-center mt-6">
            <Link href="/actualites">
              <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-white hover:text-blue dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-10 px-4 py-4 bg-transparent text-white border-2 border-white">
                Voir toutes les actualités
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </HydrationBoundary>
  );
}

export default ArticleSection;
