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
    fields: ["documentId", "cas", "deces"],
    populate: {
      epidemie: {
        fields: ["documentId", "nom"],
      },
      province: {
        fields: ["documentId", "nom"],
      },
      rapport_zs: {
        populate: {
          zones_de_sante: {
            populate: {
              province: {
                fields: ["documentId", "nom"],
              },
            },
          },
        },
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
    rapport_zs: rapport.rapport_zs?.map((rapport_z: any) => ({
      ...rapport_z,
      zones_de_sante: rapport_z.zones_de_sante?.nom,
    })),
  }));
};
