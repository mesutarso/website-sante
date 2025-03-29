import { Container, Section } from "@/components/craft";
import CardArticle from "./Card";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/data";
function ArticleSection() {
  return (
    <div className={"relative bg-blue"}>
      <Section className="md:py-8">
        <Container className="flex flex-col justify-center ">
          <h1
            className={"heading uppercase mb-20 mt-10 text-white text-center"}
          >
            Actualités
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 ">
            {articles.slice(0, 5).map((item: any, key: number) => (
              <CardArticle
                key={key}
                image={item.image}
                title={item.title}
                date={item.date}
              />
            ))}
          </div>
        </Container>
        <div className="text-center mt-6">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 hover:bg-white hover:text-blue dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-10 px-4 py-4 bg-transparent text-white border-2 border-white">
            Voir toutes les actualités
            <ArrowRight />
          </button>
        </div>
      </Section>
    </div>
  );
}

export default ArticleSection;
