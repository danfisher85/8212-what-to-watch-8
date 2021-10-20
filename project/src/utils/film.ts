import {Film, Films} from 'types/film';

export const getFilmById = (filmId: string | number, films: Films): Film | null => {
  const foundFilm = films.find((film) => film.id === filmId);
  if (foundFilm) {
    return foundFilm;
  }
  return null;
};
