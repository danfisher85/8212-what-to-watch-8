import {ActionType} from 'types/action';
import {AuthorizationStatus} from 'configs/auth-status';
import {Films, GenreName} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';
import {getGenresList} from 'utils/film';

export const changeGenre = (genre: GenreName) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const getFilmsByGenre = (films: Films, genre: GenreName, currentPage: number) => ({
  type: ActionType.GetFilmsByGenre,
  payload: filterFilmsByGenre(films, genre).slice(0, currentPage * FILM_PER_PAGE),
} as const);

export const setLoadMoreFilms = (currentPage: number) => ({
  type: ActionType.SetLoadMoreFilms,
  payload: currentPage + 1,
} as const);

export const resetFilms = () => ({
  type: ActionType.ResetFilms,
} as const);

export const loadFilms = (films: Films) => ({
  type: ActionType.LoadFilms,
  payload: {
    films,
    filteredFilms: films.slice(0, FILM_PER_PAGE),
    genres: getGenresList(films),
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);
