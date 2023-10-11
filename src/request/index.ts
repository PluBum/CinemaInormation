import axios, { AxiosRequestConfig } from "axios";
import { Film, ListFilmType, ListType, OneFilm, Premiers } from "../types";

const apiClient = axios.create();

import.meta.env.VITE_API_URL;

apiClient.defaults.baseURL = import.meta.env.VITE_API_URL;

export const httpClient = <T>(config: AxiosRequestConfig) => {
  try {
    return apiClient<T>({
      ...config,
      headers: {
        "x-api-key": localStorage.getItem("myKey"),
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const getFilms = async ({ type, page }: { type?: ListType; page?: number }) => {
  const response = await httpClient<{ films: Film[] }>({
    url: "/top",
    params: {
      type,
      page,
    },
  });
  const data = response?.data;
  console.log(data);
  if (data) {
    return data;
  }

  throw new Error("film response is undefined");
};

export const getPremiers = async ({ year, month }: { year?: number; month?: string }) => {
  const response = await httpClient<{ items: Premiers[] }>({
    url: "/premieres",
    params: {
      year,
      month,
    },
  });
  const data = response?.data;

  if (data) {
    return data;
  }

  throw new Error("film response is undefined");
};

export const getFilm = async (id: string) => {
  const response = await httpClient({
    url: `/${id}`,
    params: {
      id,
    },
  });
  const data = response?.data as OneFilm;

  if (data) {
    return data;
  }

  throw new Error("film response is undefined");
};

export const getFilmsByYear = async ({
  type,
  page,
  ratingFrom,
  ratingTo,
  yearFrom,
  yearTo,
  keyword,
}: {
  type?: ListFilmType;
  page?: number;
  ratingFrom?: number | string;
  ratingTo?: number | string;
  yearFrom?: number | null;
  yearTo?: number | null;
  keyword?: string;
}) => {
  const response = await httpClient<{ items: OneFilm[] }>({
    params: {
      type,
      ratingFrom,
      ratingTo,
      yearFrom,
      yearTo,
      page,
      keyword,
    },
  });
  const data = response?.data;
  console.log(data);
  if (data) {
    return data;
  }

  throw new Error("film response is undefined");
};
