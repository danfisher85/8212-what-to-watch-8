import {Film, Films} from 'types/film';

export const getFilmById = (filmId: string | number, films: Films): Film | undefined => films.find((film) => film.id === filmId);
