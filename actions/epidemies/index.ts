"use server";
import { getCollection, getCollectionById } from "@/lib/strapi";

export const getEpidemiesOptions = async () => {
  const { data: epidemies } = await getCollection("epidemies", {
    fields: ["documentId", "nom"],
  });
  return epidemies?.map((epidemie: any) => ({
    label: epidemie.nom,
    value: epidemie.documentId,
  }));
};

export const getEpidemies = async () => {
  const { data: epidemies } = await getCollection("epidemies", {
    fields: ["documentId", "nom", "description", "codeOMS"],
    sort: ["nom:asc"],
    populate: {
      rapport_hebomandaires: {
        fields: ["documentId", "semaine"],
      },
    },
  });
  return epidemies?.map((epidemie: any) => ({
    ...epidemie,
    rapport_hebomandaires: epidemie.rapport_hebomandaires.length,
  }));
};

export const getEpidemieByDocumentId = async (documentId: string) => {
  const { data: epidemie } = await getCollectionById("epidemies", documentId);
  return epidemie?.nom || "";
};
