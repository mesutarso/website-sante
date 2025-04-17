import { queryOptions } from "@tanstack/react-query";
import { getAllArticles, getLastestArticles } from "../collections/articles";

export const articlesQuery = queryOptions({
  queryKey: ["latest-articles"],
  queryFn: () => {
    const articles = getLastestArticles();
    return articles;
  },
});

export const allArticlesQuery = queryOptions({
  queryKey: ["all-articles"],
  queryFn: () => {
    const articles = getAllArticles();
    return articles;
  },
});
