import { getArticleBySlug, getAllArticlesSlugs } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import DetailsArticles from "@/components/articles/details";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllArticlesSlugs();

  return slugs.map(({ slug }) => slug);
}

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


  return {
    title: article.title,
    description: "Article du Ministère de la Santé de la République Démocratique du Congo",
    metadataBase: new URL("https://sante.gouv.cd"),
    openGraph: {
      title: article.title,
      description: "Article du Ministère de la Santé de la République Démocratique du Congo",
      images: article.image ? [{
        url: article.image,
        width: 1200,
        height: 630,
        alt: article.title,
        type: "image/png",
      }] : [],
      url: `https://sante.gouv.cd/actualites/${slug}`,
      type: "article",
      authors: ["Ministère de la Santé de la République Démocratique du Congo"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: "Article du Ministère de la Santé de la République Démocratique du Congo",
      images: article.image ? [{
        url: article.image,
        width: 1200,
        height: 630,
        alt: article.title,
        type: "image/png",
      }] : [],

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
