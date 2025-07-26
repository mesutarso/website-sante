"use server";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  QueryParams,
  StrapiResponse,
  StrapiFilters,
  buildQueryString,
} from "./helpers";

interface StrapiError {
  error: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}

const strapiApi = axios.create({
  baseURL: process.env.STRAPI_URL || "http://localhost:1337/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
});

strapiApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<StrapiError>) => {
    const errorMessage =
      error.response?.data?.error?.message ||
      error.message ||
      "Une erreur est survenue";

    const statusCode = error.response?.status || 500;

    console.error(`[Strapi API Error] ${statusCode}: ${errorMessage}`, {
      url: error.config?.url,
      method: error.config?.method,
      data: error.response?.data,
    });

    const customError = new Error(errorMessage);
    (customError as any).status = statusCode;
    (customError as any).details = JSON.stringify(
      error.response?.data?.error?.details
    );

    throw customError;
  }
);

export const getCollection = async <T = any>(
  collection: string,
  params?: QueryParams
): Promise<StrapiResponse<T[]>> => {
  try {
    const queryString = params ? buildQueryString(params) : "";
    const url = queryString ? `${collection}?${queryString}` : collection;

    const response = await strapiApi.get<StrapiResponse<T[]>>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCollectionById = async <T = any>(
  collection: string,
  id: string,
  params?: QueryParams
): Promise<StrapiResponse<T>> => {
  try {
    const defaultParams: QueryParams = { ...params };
    const queryString = buildQueryString(defaultParams);
    const url = `${collection}/${id}?${queryString}`;

    const response = await strapiApi.get<StrapiResponse<T>>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchCollection = async <T = any>(
  collection: string,
  searchTerm: string,
  searchFields: string[] = ["title", "name", "description"],
  params?: Omit<QueryParams, "filters">
): Promise<StrapiResponse<T[]>> => {
  const searchFilters: StrapiFilters = {
    $or: searchFields.map((field) => ({
      [field]: { $containsi: searchTerm },
    })),
  };

  const queryParams: QueryParams = {
    ...params,
    filters: params?.filters
      ? { $and: [searchFilters, params.filters] }
      : searchFilters,
  };

  return getCollection<T>(collection, queryParams);
};

export const countCollection = async (
  collection: string,
  filters?: StrapiFilters
): Promise<{ count: number }> => {
  try {
    const params: QueryParams = {
      filters,
      pagination: { page: 1, pageSize: 1, withCount: true },
    };

    const response = await getCollection(collection, params);
    return { count: response.meta?.pagination?.total || 0 };
  } catch (error) {
    throw error;
  }
};

export const existsInCollection = async (
  collection: string,
  filters: StrapiFilters
): Promise<boolean> => {
  try {
    const { count } = await countCollection(collection, filters);
    return count > 0;
  } catch (error) {
    return false;
  }
};
