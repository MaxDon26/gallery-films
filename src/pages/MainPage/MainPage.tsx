import { fetchMovieByQuery, fetchPopularMovies } from "@entities/movie";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import { MovieCard } from "@features/movie";
import { useDebounce } from "@shared/hooks";

const MainPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies", debouncedQuery],
    queryFn: () =>
      debouncedQuery ? fetchMovieByQuery(debouncedQuery) : fetchPopularMovies(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Популярные фильмы</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название фильма"
        />
      </div>
      {isLoading && <div className={styles.loading}>Загрузка...</div>}
      {error && <div className={styles.error}>Произошла ошибка</div>}
      <div className={styles.movieGrid}>
        {data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MainPage;
