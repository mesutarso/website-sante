const WORDPRESS_API_URL =
  (process.env.WORDPRESS_API_URL as string) ||
  "https://administration.sante.gouv.cd/graphql";

export const fetchGraphql = async (query: string, variables?: any) => {
  if (!WORDPRESS_API_URL) {
    throw new Error(
      "WORDPRESS_API_URL n'est pas défini dans les variables d'environnement"
    );
  }

  try {
    const response = await fetch(WORDPRESS_API_URL, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error(data.errors.map((e: any) => e.message).join(", "));
    }

    return data.data;
  } catch (error) {
    console.error("Erreur lors de la requête GraphQL:", error);
    throw error;
  }
};
