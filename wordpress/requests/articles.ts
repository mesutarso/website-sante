import { queryOptions } from "@tanstack/react-query";
import { getLastestArticles } from "../collections/articles";

export const articlesQuery = queryOptions({
  queryKey: ["latest-articles"],
  queryFn: getLastestArticles,
});
