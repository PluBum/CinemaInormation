interface Country {
  country: string;
}
[];

interface Genre {
  genre: string;
}
[];

export interface Film {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: number;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilmsData {
  pagesCount: number;
  films: Film[];
}
[];

export interface Premiers {
  total: number;
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
  duration: number;
  premiereRu: string;
}
export interface PremierReq {
  total: number;
  items: Premiers[];
}
[];
export interface OneFilm {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength?: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries?: Country[] | undefined;
  genres?: Genre[] | undefined;
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}
export interface FilmByYearData {
  total: number;
  totalPages: number;
  items: OneFilm[];
}
export type ListType = "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | string;
export type ListFilmType = "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES" | "ALL" | string;
