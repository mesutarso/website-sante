import type { MetadataRoute } from "next";
import { getAllArticlesSlugs } from "@/lib/wordpress";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sante.gouv.cd";

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/programme`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/csu`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ministre`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cabinet`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  let articleRoutes: MetadataRoute.Sitemap = [];
  
  try {
    const articles = await getAllArticlesSlugs();
    articleRoutes = articles.map((article: any) => ({
      url: `${baseUrl}/actualites/${article.slug}`,
      lastModified: article.date,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    // Si WORDPRESS_API n'est pas défini ou si l'API WordPress n'est pas accessible,
    // on continue avec seulement les routes statiques
    console.warn("Impossible de récupérer les articles WordPress pour le sitemap:", error);
  }

  return [...staticRoutes, ...articleRoutes];
}
