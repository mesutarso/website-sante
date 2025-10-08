import { queryOptions } from "@tanstack/react-query";
import { getDocuments, getDocumentsByCategory } from "../collections/documents";

export const documentsQuery = (params?: {
  first?: number;
  after?: string;
  search?: string;
}) =>
  queryOptions({
    queryKey: ["documents", params],
    queryFn: async () => await getDocuments(params),
  });

export const documentsByCategoryQuery = (categorySlug: string) =>
  queryOptions({
    queryKey: ["documents", "category", categorySlug],
    queryFn: async () => await getDocumentsByCategory(categorySlug),
  });
