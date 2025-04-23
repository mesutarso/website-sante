import { getArticleBySlug } from "@/wordpress/collections/articles";
import { notFound } from "next/navigation";
import DetailsArticles from "@/components/articles/details";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.title,
    description: article.description || "Article du Ministère de la Santé de la République Démocratique du Congo",
    openGraph: {
      title: article.title,
      description: article.description || "Article du Ministère de la Santé de la République Démocratique du Congo",
      images: article.image ? [article.image, ...previousImages] : previousImages,
      url: `https://sante.gouv.cd/actualites/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["Ministère de la Santé de la RDC"],
    },
  };
}

async function Actualite({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const url = `https://sante.gouv.cd/actualites/${slug}`
  return (
    <>
      <DetailsArticles article={article} url={url} />
    </>
  );
}

export default Actualite;
