export interface Movie {
  id: number; // Уникальный идентификатор фильма
  name: string; // Название фильма
  alternativeName?: string; // Альтернативное название (например, оригинальное название)
  description?: string; // Описание фильма
  year?: number; // Год выпуска
  persons?: Array<{ name: string }>;
  poster?: {
    url: string; // URL постера фильма
  };
  rating?: {
    kp?: number; // Рейтинг на Кинопоиске
    imdb?: number; // Рейтинг на IMDb
  };
  genres?: Array<{
    name: string; // Название жанра
  }>;
  countries?: Array<{
    name: string; // Название страны
  }>;
  premiere?: {
    world?: string;
    [key: string]: string | undefined;
  };
  movieLength?: number; // Длительность фильма в минутах
  ageRating?: number; // Возрастной рейтинг
  type?: string; // Тип (фильм, сериал и т.д.)
}
