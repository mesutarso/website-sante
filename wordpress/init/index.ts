"use server";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL as string;

export const fetchGraphql = async (query: string, variables?: any) => {
  const response = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("admin:Mesut@2023Tarso@2024"),
    },
  });

  const data = await response.json();

  return data.data;
};
