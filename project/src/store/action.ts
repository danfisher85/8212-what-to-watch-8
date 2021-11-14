import {ActionType} from 'types/action';
import {AuthorizationStatus} from 'configs/auth-status';
import {Film, Films, GenreName} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';
import {getGenresList} from 'utils/film';

export const setDataLoaded = (payload: boolean) => ({
  type: ActionType.SetDataLoaded,
  payload,
} as const);

export const changeGenre = (payload: GenreName) => ({
  type: ActionType.ChangeGenre,
  payload,
} as const);

export const setGenres = (films: Films) => ({
  type: ActionType.SetGenres,
  payload: getGenresList(films),
} as const);

export const setFilmsByGenre = (films: Films) => ({
  type: ActionType.SetFilmsByGenre,
  payload: films.slice(0, FILM_PER_PAGE),
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

export const setFilms = (payload: Films) => ({
  type: ActionType.SetFilms,
  payload,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const loadPromoFilm = (film: Film) => ({
  type: ActionType.LoadPromoFilm,
  payload: film,
} as const);
