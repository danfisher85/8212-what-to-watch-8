import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from 'types/state';
import {
  setDataLoaded,
  changeGenre,
  setGenres,
  setFilmsByPage,
  getFilmsByGenre,
  setLoadMoreFilms,
  resetFilms,
  setFilms,
  setFavoriteFilms,
  loadPromoFilm,
  loadCurrentFilm,
  loadSimilarFilms,
  loadFilmComments,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadUserInfo,
  userLoginError
} from 'store/action';

export enum ActionType {
  SetDataLoaded = 'data/setDataLoaded',
  ChangeGenre = 'catalog/changeGenre',
  SetGenres = 'data/setGenres',
  SetFilmsByPage = 'data/setFilmsByPage',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
  ResetFilms = 'catalog/resetFilms',
  SetFilms = 'data/setFilms',
  SetFavoriteFilms = 'data/setFavoriteFilms',
  LoadPromoFilm = 'data/loadPromoFilm',
  LoadCurrentFilm = 'data/loadCurrentFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadFilmComments = 'data/loadFilmComments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'catalog/redirectToRoute',
  LoadUserInfo = 'user/loadUserInfo',
  UserLoginError = 'user/userLoginError',
}

export type Actions =
  | ReturnType<typeof setDataLoaded>
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof setGenres>
  | ReturnType<typeof setFilmsByPage>
  | ReturnType<typeof getFilmsByGenre>
  | ReturnType<typeof setLoadMoreFilms>
  | ReturnType<typeof resetFilms>
  | ReturnType<typeof setFilms>
  | ReturnType<typeof setFavoriteFilms>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof loadCurrentFilm>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadFilmComments>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadUserInfo>
  | ReturnType<typeof userLoginError>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
