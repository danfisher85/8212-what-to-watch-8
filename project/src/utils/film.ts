import {Film, Films} from 'types/film';
import {GenreName} from 'types/film';

export const getFilmById = (filmId: string | number, films: Films): Film | undefined => films.find((film) => film.id === filmId);

export const filterFilmsByGenre = (films: Films, genre: GenreName): Films => films.filter((film: Film) => film.genre === genre);
