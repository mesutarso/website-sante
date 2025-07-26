"use server";
import { getCollection } from "@/lib/strapi";

// Liste complète des 26 provinces de la RDC
// Cette liste est basée sur la division administrative officielle de la RDC
export const PROVINCES_RDC = [
  { id: 1, name: "Kongo-Central" },
  { id: 2, name: "Bas-Uele" },
  { id: 3, name: "Équateur" },
  { id: 4, name: "Haut-Katanga" },
  { id: 5, name: "Haut-Lomami" },
  { id: 6, name: "Haut-Uele" },
  { id: 7, name: "Ituri" },
  { id: 8, name: "Kasaï" },
  { id: 9, name: "Kasaï-Central" },
  { id: 10, name: "Kasaï-Oriental" },
  { id: 11, name: "Kinshasa" },
  { id: 12, name: "Kwango" },
  { id: 13, name: "Kwilu" },
  { id: 14, name: "Lomami" },
  { id: 15, name: "Mai-Ndombe" },
  { id: 16, name: "Maniema" },
  { id: 17, name: "Mongala" },
  { id: 18, name: "Nord-Kivu" },
  { id: 19, name: "Nord-Ubangi" },
  { id: 20, name: "Sankuru" },
  { id: 21, name: "Sud-Kivu" },
  { id: 22, name: "Sud-Ubangi" },
  { id: 23, name: "Tanganyika" },
  { id: 24, name: "Tshopo" },
  { id: 25, name: "Tshuapa" },
  { id: 26, name: "Lualaba" },
];

// Récupère les provinces depuis Strapi
export const getProvinces = async () => {
  const { data: provinces } = await getCollection("provinces", {
    fields: ["documentId", "nom"],
  });
  return provinces?.map((province: any) => ({
    label: province.nom,
    value: province.documentId,
  }));
};

// Fonction pour obtenir la liste statique des provinces (pour les select, etc.)
export const getStaticProvinces = () => {
  return PROVINCES_RDC.map((province) => ({
    label: province.name,
    value: province.id.toString(),
    id: province.id,
  }));
};

// Fonction utilitaire pour trouver une province par nom
export const findProvinceByName = (name: string) => {
  return PROVINCES_RDC.find(
    (province) => province.name.toLowerCase() === name.toLowerCase()
  );
};

// Fonction utilitaire pour obtenir les noms des provinces uniquement
export const getProvinceNames = () => {
  return PROVINCES_RDC.map((province) => province.name);
};
