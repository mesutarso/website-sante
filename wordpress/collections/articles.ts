import {
  GET_ARTICLE_BY_SLUG,
  GET_LASTEST_ARTICLES,
  GET_ALL_ARTICLES,
} from "../init/queries/article";
import { fetchGraphql } from "../init";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export async function getLastestArticles() {
  const { posts } = await fetchGraphql(GET_LASTEST_ARTICLES);
  return posts.edges.map((edge: any) => {
    return {
      id: edge.node.id,
      title: edge.node.title,
      date: format(new Date(edge.node.date), "dd MMMM yyyy", { locale: fr }),
      image: edge.node.featuredImage.node.sourceUrl,
      link: edge.node.slug,
    };
  });
}

export async function getArticleBySlug(slug: string) {
  const { post } = await fetchGraphql(GET_ARTICLE_BY_SLUG, {
    id: slug,
  });
  return {
    title: post.title,
    slug: post.slug,
    date: format(new Date(post.date), "dd MMMM yyyy", { locale: fr }),
    image: post.featuredImage?.node?.sourceUrl,
    description: post?.excerpt,
    content: post?.content,
    categories: post.categories?.edges[0]?.node?.name,
    similarsPosts:
      post.categories?.edges[0]?.node?.posts?.edges
        .map((edge: any) => {
          return {
            id: edge.node.id,
            title: edge.node.title,
            date: format(new Date(edge.node.date), "dd MMMM yyyy", {
              locale: fr,
            }),
            image: edge.node.featuredImage.node.sourceUrl,
            link: edge.node.slug,
          };
        })
        .filter((item: any) => item.title !== post.title) || [],
  };
}

export async function getAllArticles() {
  const { posts } = await fetchGraphql(GET_ALL_ARTICLES);
  return posts.edges.map((edge: any) => {
    return {
      id: edge.node.id,
      title: edge.node.title,
      excerpt: edge.node.excerpt,
      date: format(new Date(edge.node.date), "dd MMMM yyyy", { locale: fr }),
      image: edge.node.featuredImage.node.sourceUrl,
      link: edge.node.slug,
    };
  });
}
