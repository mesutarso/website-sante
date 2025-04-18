import { queryOptions } from "@tanstack/react-query";
import { getAllArticles, getLastestArticles } from "../collections/articles";

export const articlesQuery = queryOptions({
  queryKey: ["latest-articles"],
  queryFn: async () => await getLastestArticles(),
});

export const allArticlesQuery = queryOptions({
  queryKey: ["all-articles"],
  queryFn: async () => await getAllArticles(),
});
