export const GET_SLIDERS = `query getSliders {
  posts(first: 5) {
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
