import { Movie } from "@entities/movie";
import { create } from "zustand";

interface FavoriteStoreState {
  favoriteMovies: Movie["id"][];
  addFavoriteMovie: (movieId: number) => void;
  removeFavoriteMovie: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

export const useFavoriteStore = create<FavoriteStoreState>((set, get) => ({
  favoriteMovies: [],
  addFavoriteMovie: (movieId) => {
    set((state) => ({
      favoriteMovies: [...state.favoriteMovies, movieId],
    }));
    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(get().favoriteMovies)
    );
  },
  removeFavoriteMovie: (movieId) => {
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((id) => id !== movieId),
    }));
    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(get().favoriteMovies)
    );
  },
  isFavorite: (movieId: number) => {
    return get().favoriteMovies.some((id) => id === movieId);
  },
}));

const initStore = () => {
  const favoriteMovies = localStorage.getItem("favoriteMovies");
  if (favoriteMovies) {
    useFavoriteStore.setState({ favoriteMovies: JSON.parse(favoriteMovies) });
  }
};

initStore();
