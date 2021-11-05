import {Film, Films} from 'types/film';
import {ALL_GENRES_ITEM} from 'store/current-genre';

export const getFilmById = (filmId: string | number, films: Films): Film | undefined => (
  films.find((film) => film.id === filmId)
);

// export const filterFilmsByGenre = (films: Films, genre: string): Films => (
//   films.filter((film: Film) => ALL_GENRES_ITEM === genre ? true : film.genre === genre)
// );

export const filterFilmsByGenre = (films: Films, genre: string): Films => {
  if (ALL_GENRES_ITEM === genre) {
    return films;
  }

  return films.filter((film: Film) => film.genre === genre);
};

export const getGenresList = (films: Films): string[] => [ALL_GENRES_ITEM, ...new Set(films.map((film) => film.genre))];
