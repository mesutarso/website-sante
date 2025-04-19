"use server";
import { GET_SLIDERS } from "../init/queries/article";
import { fetchGraphql } from "../init";

export async function getSliders() {
  const {
    posts: { edges },
  } = await fetchGraphql(GET_SLIDERS);
  return edges.map((edge: any) => {
    return {
      title: edge.node.title,
      description: edge.node.excerpt,
      image:
        edge.node.featuredImage?.node?.sourceUrl || "/images/prevoyance.jpeg",
      link: edge.node.slug,
    };
  });
}
