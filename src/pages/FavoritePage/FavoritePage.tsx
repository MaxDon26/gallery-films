import { MovieCard } from "@features/movie";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styles from "./FavoritePage.module.scss";
import { useFavoriteStore } from "@features/favorite";
import { fetchMoviesByIds } from "@entities/movie";

const FavoritePage: React.FC = () => {
  const { favoriteMovies } = useFavoriteStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => fetchMoviesByIds(favoriteMovies),
  });

  const filtredMovies = data?.filter((movie) =>
    favoriteMovies.includes(movie.id)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Избранные фильмы</h1>
      {isLoading && <div className={styles.loading}>Загрузка...</div>}
      {error && <div className={styles.error}>Произошла ошибка</div>}

      {filtredMovies?.length === 0 ? (
        <div className={styles.noFavorites}>Нет избранных фильмов</div>
      ) : (
        <div className={styles.movieGrid}>
          {filtredMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
