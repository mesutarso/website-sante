import { queryOptions } from "@tanstack/react-query";
import { getAllArticles, getLastestArticles } from "../collections/articles";

export const articlesQuery = queryOptions({
  queryKey: ["latest-articles"],
  queryFn: async () => {
    const articles = await getLastestArticles();
    return articles;
  },
});

export const allArticlesQuery = queryOptions({
  queryKey: ["all-articles"],
  queryFn: async () => {
    const articles = await getAllArticles();
    return articles;
  },
});
