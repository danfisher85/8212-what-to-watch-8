import {ActionType} from 'types/action';
import {AuthorizationStatus} from 'configs/auth-status';
import {Film, Films, GenreName} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';
import {AppRoute} from 'configs/routes';
import {UserInfo} from 'types/user-info';

export const setDataLoaded = (payload: boolean) => ({
  type: ActionType.SetDataLoaded,
  payload,
} as const);

export const changeGenre = (payload: GenreName) => ({
  type: ActionType.ChangeGenre,
  payload,
} as const);

export const setGenres = (payload: Array<GenreName>) => ({
  type: ActionType.SetGenres,
  payload,
} as const);

export const setFilmsByPage = (payload: Films) => ({
  type: ActionType.SetFilmsByPage,
  payload,
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

export const setFavoriteFilms = (payload: Films) => ({
  type: ActionType.SetFavoriteFilms,
  payload,
} as const);

export const requireAuthorization = (payload: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const userLoginError = (error: string) => ({
  type: ActionType.UserLoginError,
  payload: error,
} as const);

export const redirectToRoute = (payload: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload,
} as const);

export const loadUserInfo = (payload: UserInfo) => ({
  type: ActionType.LoadUserInfo,
  payload,
} as const);

export const loadPromoFilm = (film: Film) => ({
  type: ActionType.LoadPromoFilm,
  payload: film,
} as const);
