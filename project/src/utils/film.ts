import {Film, Films} from 'types/film';
import {GenreName} from 'types/film';
import {ALL_GENRES_ITEM} from 'configs/film-filter';

export const getFilmById = (filmId: string | number, films: Films): Film | undefined => (
  films.find((film) => film.id === filmId)
);

export const filterFilmsByGenre = (films: Films, genre: GenreName): Films => (
  films.filter((film: Film) => genre === ALL_GENRES_ITEM ? true : film.genre === genre)
);
