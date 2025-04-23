export const GET_SLIDERS = `query getSliders {
  posts(first: 4) {
    edges {
      node {
        id
        slug
        title(format: RENDERED)
        excerpt
        featuredImage{
          node{
            sourceUrl
          }
        }
      }
    }
  }
}`;

export const GET_LASTEST_ARTICLES = `query getLastPosts {
  posts(first: 4) {
    edges {
      node {
        id
        slug
        date
        title(format: RENDERED)
        featuredImage{
          node{
            sourceUrl
          }
        }
      }
    }
  }
}`;

export const GET_ARTICLE_BY_SLUG = `
query getPostBySlug($id: ID!) {
  post(id: $id, idType: SLUG) {
    title
    excerpt
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories(first: 1){
      edges{
        node{
          name
          posts(first:5){
            edges{
              node{
                id
                title
                date
                slug
                featuredImage{
                  node{
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
    content
  }
}
`;

export const GET_ALL_ARTICLES = `query getAllArticles {
  posts(first: 100) {
    edges {
      node {
        id
        slug
        date
        title(format: RENDERED)
        excerpt
        featuredImage{
          node{
            sourceUrl
          }
        }
      }
    }
  }
}`;
