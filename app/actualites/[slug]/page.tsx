import { getArticleBySlug } from "@/wordpress/collections/articles";
import { notFound } from "next/navigation";
import DetailsArticles from "@/components/articles/details";



type Props = {
  params: Promise<{
    slug: string;
  }>;
};


async function Actualite({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    notFound();
  }
  return (

    <DetailsArticles article={article} />

  );
}

export default Actualite;
