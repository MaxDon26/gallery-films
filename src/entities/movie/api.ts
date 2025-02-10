import axios from "axios";
import { Movie } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.kinopoisk.dev";

export const fetchPopularMovies = async (): Promise<Movie[] | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}/v1.4/movie`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
      params: {
        sortField: "rating.kp",
        sortType: -1,
        limit: 20,
      },
    });

    return response.data.docs;
  } catch (e) {
    console.log(e);
  }
};

export const fetchMovieByQuery = async (
  queryString: string
): Promise<Movie[] | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}/v1.4/movie/search`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
      params: {
        query: queryString,
      },
    });

    return response.data.docs;
  } catch (e) {
    console.log(e);
  }
};

export const fetchMoviesByIds = async (
  ids: number[]
): Promise<Movie[] | undefined> => {
  try {
    const idsReqests = ids.map((id) =>
      axios.get(`${BASE_URL}/v1.4/movie/${id}`, {
        headers: {
          "X-API-KEY": API_KEY,
        },
      })
    );

    const response = await axios.all(idsReqests);

    return response.map((res) => res.data);
  } catch (e) {
    console.log(e);
  }
};

export const fetchMovieById = async (
  id: number
): Promise<Movie | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}/v1.4/movie/${id}`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
