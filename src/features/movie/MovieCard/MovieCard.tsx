import { Movie } from "@entities/movie/types";
import React from "react";
import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
import { useFavoriteStore } from "@features/favorite";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addFavoriteMovie, isFavorite, removeFavoriteMovie } =
    useFavoriteStore();
  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.id}`}>
        {movie.poster?.url ? (
          <img
            src={movie.poster.url}
            className={styles.poster}
            alt={movie.name}
          />
        ) : (
          <div className={styles.noPoster}>Постер отсутствует</div>
        )}
        <h3 className={styles.title}>{movie.name}</h3>
      </Link>

      {movie.rating?.kp && (
        <div className={styles.rating}>
          Рейтинг Kinopoisk: {movie.rating.kp.toFixed(2)}
        </div>
      )}

      {movie.year && <div className={styles.year}>{movie.year}</div>}

      {isFavorite(movie.id) ? (
        <button
          onClick={() => removeFavoriteMovie(movie.id)}
          className={styles.favoriteButton}
        >
          Убрать из избранное
        </button>
      ) : (
        <button
          onClick={() => addFavoriteMovie(movie.id)}
          className={styles.favoriteButton}
        >
          Добавить в избранное
        </button>
      )}
    </div>
  );
};
