"use server";
import { getCollection } from "@/lib/strapi";

interface Filters {
  province?: string;
  semaine?: number;
}

export const getWeekReportsByEpidemie = async (
  epidemie: string,
  filters?: Filters
) => {
  const { data: rapports } = await getCollection("rapport-hebomandaires", {
    populate: {
      epidemie: {
        fields: ["documentId", "nom"],
      },
      province: {
        fields: ["documentId", "nom"],
      },
    },
    filters: {
      epidemie: {
        documentId: epidemie,
      },
      province: {
        documentId: filters?.province || undefined,
      },
      semaine: {
        $eq: filters?.semaine || undefined,
      },
    },
  });
  return rapports?.map((rapport: any) => ({
    ...rapport,
    province: rapport.province?.nom,
    epidemie: rapport.epidemie?.nom,
  }));
};
