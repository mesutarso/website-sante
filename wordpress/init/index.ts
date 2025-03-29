"use server";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL as string;

export const fetchGraphql = async (query: string, variables?: any) => {
  const response = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();

  return data;
};
