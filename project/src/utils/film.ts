import {Film, Films, GenreName} from 'types/film';
import {ALL_GENRES_ITEM} from 'store/current-genre';

export const getFilmById = (filmId: string | number, films: Films): Film | undefined => (
  films.find((film) => film.id === filmId)
);

export const filterFilmsByGenre = (films: Films, genre: GenreName): Films => {
  if (ALL_GENRES_ITEM === genre) {
    return films;
  }

  return films.filter((film: Film) => film.genre === genre);
};

export const getGenresList = (films: Films): Array<GenreName> => [ALL_GENRES_ITEM, ...new Set(films.map((film) => film.genre))];

export const setFilmRatingText = (rating: number): string => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    default:
      return 'Awesome';
  }
};
