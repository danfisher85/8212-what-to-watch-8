import {Film, Films} from 'types/film';
import {ALL_GENRES_ITEM} from 'configs/film-filter';

export const getFilmById = (filmId: string | number, films: Films): Film | undefined => (
  films.find((film) => film.id === filmId)
);

export const filterFilmsByGenre = (films: Films, genre: string): Films => (
  films.filter((film: Film) => ALL_GENRES_ITEM === genre ? true : film.genre === genre)
);

export const getGenresList = (films: Films): string[] => {
  const uniqueGenres = new Set<string>();

  films.forEach((film) => {
    uniqueGenres.add(film.genre);
  });

  return [ALL_GENRES_ITEM, ...Array.from(uniqueGenres)];
};
