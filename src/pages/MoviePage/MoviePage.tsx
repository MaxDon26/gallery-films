import { fetchMovieById } from "@entities/movie";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./MoviePage.module.scss";

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovieById(Number(id)!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Произошла ошибка</div>;

  if (!movie) return <div>Фильм не найден</div>;

  console.log(movie);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.name}</h1>
      <div className={styles.details}>
        {movie.poster?.url ? (
          <img className={styles.poster} src={movie.poster?.url} alt="poster" />
        ) : (
          <div className={styles.noPoster}>Постер отсутствует</div>
        )}

        <div className={styles.info}>
          <p>Рейтинг: {movie.rating?.kp?.toFixed(2)}</p>
          <p>Год: {movie.year}</p>
          <p>Страна: {movie.countries?.map((country) => country.name)}</p>
          <p>Жанр: {movie.genres?.map((genre) => genre.name).join(", ")}</p>
          <p>
            Премьера:{" "}
            {new Date(movie.premiere?.world as string).toLocaleDateString()}
          </p>
          <p>
            актеры: {movie.persons?.map((person) => person.name).join(", ")}
          </p>
          <p>Описание: {movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
