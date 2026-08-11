import {
  GET_DOCUMENTS,
  GET_DOCUMENTS_BY_CATEGORY,
  GET_DOCUMENTS_BY_CATEGORY_NAME,
} from "../init/queries/documents";
import { fetchGraphql } from "../init";

export interface Document {
  id: string;
  title: string;
  type: "fichier" | "lien";
  lien?: string;
  fichier?: {
    url: string;
    size: number;
  };
  categories: string[];
}

export interface DocumentsResponse {
  documents: Document[];
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
  };
}

export async function getDocuments(params?: {
  first?: number;
  after?: string;
  search?: string;
}): Promise<DocumentsResponse> {
  try {
    const result = await fetchGraphql(GET_DOCUMENTS, {
      first: params?.first || 10,
      after: params?.after || null,
      search: params?.search || null,
    });

    if (!result || !result.documents) {
      return {
        documents: [],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: "",
          endCursor: "",
        },
      };
    }

    const { documents } = result;

    return {
      documents: (documents.nodes || []).map((node: any) => ({
        id: node.id,
        title: node.title,
        type: node.documentsFields?.type[0] || "fichier",
        lien: node.documentsFields?.lien || null,
        fichier: node.documentsFields?.fichier?.node
          ? {
              url: node.documentsFields.fichier.node.mediaItemUrl,
              size: node.documentsFields.fichier.node.fileSize || 0,
            }
          : null,
        categories:
          node.categorieDocuments?.nodes?.map((cat: any) => cat.name) || [],
      })),
      pageInfo: documents.pageInfo || {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: "",
        endCursor: "",
      },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des documents:", error);
    throw error;
  }
}

export interface CategoryWithDocuments {
  name: string;
  slug: string;
  count: number;
  documents: Document[];
}

export async function getDocumentsByCategory(
  categorySlug: string
): Promise<CategoryWithDocuments> {
  try {
    const result = await fetchGraphql(GET_DOCUMENTS_BY_CATEGORY, {
      id: categorySlug,
    });

    if (!result || !result.categorieDocument) {
      return {
        name: "",
        slug: categorySlug,
        count: 0,
        documents: [],
      };
    }

    const { categorieDocument } = result;

    return {
      name: categorieDocument.name,
      slug: categorieDocument.slug,
      count: categorieDocument.count || 0,
      documents: (categorieDocument.documents?.nodes || []).map(
        (node: any) => ({
          id: node.id,
          title: node.title,
          type: node.documentsFields?.type[0] || "fichier",
          lien: node.documentsFields?.lien || null,
          fichier: node.documentsFields?.fichier?.node
            ? {
                url: node.documentsFields.fichier.node.mediaItemUrl,
                size: node.documentsFields.fichier.node.fileSize || 0,
              }
            : null,
          categories:
            node.categorieDocuments?.nodes?.map((cat: any) => cat.name) || [],
        })
      ),
    };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des documents par catégorie:",
      error
    );
    throw error;
  }
}

export async function getDocumentsByCategoryName(
  categoryName: string
): Promise<CategoryWithDocuments> {
  try {
    const result = await fetchGraphql(GET_DOCUMENTS_BY_CATEGORY_NAME, {
      name: categoryName,
    });

    if (!result?.categorieDocument) {
      return {
        name: categoryName,
        slug: "",
        count: 0,
        documents: [],
      };
    }

    const { categorieDocument } = result;

    return {
      name: categorieDocument.name,
      slug: categorieDocument.slug,
      count: categorieDocument.count || 0,
      documents: (categorieDocument.documents?.nodes || []).map(
        (node: any) => ({
          id: node.id,
          title: node.title,
          type: node.documentsFields?.type[0] || "fichier",
          lien: node.documentsFields?.lien || null,
          fichier: node.documentsFields?.fichier?.node
            ? {
                url: node.documentsFields.fichier.node.mediaItemUrl,
                size: node.documentsFields.fichier.node.fileSize || 0,
              }
            : null,
          categories:
            node.categorieDocuments?.nodes?.map((cat: any) => cat.name) || [],
        })
      ),
    };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des documents par nom de catégorie:",
      error
    );
    throw error;
  }
}
