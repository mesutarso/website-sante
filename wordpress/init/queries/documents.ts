export const GET_DOCUMENTS = `query getDocuments($first: Int = 10, $after: String, $search: String) {
  documents(first: $first, after: $after, where: { search: $search }) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    nodes {
      id
      title(format: RENDERED)
      documentsFields {
        lien
        type
        fichier {
          node {
            mediaItemUrl
            fileSize
          }
        }
      }
      categorieDocuments {
        nodes {
          name
          slug
        }
      }
    }
  }
}`;

export const GET_DOCUMENTS_BY_CATEGORY = `query getDocumentsByCategory($id: ID = "") {
  categorieDocument(id: $id, idType: SLUG) {
      count
      name
      slug
      documents(first: 100) {
        nodes {
          id
          title(format: RENDERED)
          documentsFields {
            fichier {
              node {
                mediaItemUrl
                fileSize
              }
            }
            lien
            type
          }
          categorieDocuments {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_DOCUMENTS_BY_CATEGORY_NAME = `query getDocumentsByCategoryName($name: ID = "") {
  categorieDocument(id: $name, idType: NAME) {
    count
    name
    slug
    documents(first: 100) {
      nodes {
        id
        title(format: RENDERED)
        documentsFields {
          fichier {
            node {
              mediaItemUrl
              fileSize
            }
          }
          lien
          type
        }
        categorieDocuments {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
}`;
