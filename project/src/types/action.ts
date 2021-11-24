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
  isFavoriteLoading,
  setIsPromoFavoriteLoading,
  loadFavoriteFilms,
  loadPromoFilm,
  loadCurrentFilm,
  loadSimilarFilms,
  loadFilmComments,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  redirectTo404,
  loadUserInfo,
  userLoginError,
  isCommentPosting
} from 'store/action';

export enum ActionType {
  SetDataLoaded = 'catalog/setDataLoaded',
  SetFilmsByPage = 'catalog/setFilmsByPage',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
  ResetFilms = 'catalog/resetFilms',
  SetFilms = 'catalog/setFilms',
  SetGenres = 'genre/setGenres',
  ChangeGenre = 'genre/changeGenre',
  LoadPromoFilm = 'promo/loadPromoFilm',
  SetIsPromoFavoriteLoading = 'promo/setIsPromoFavoriteLoading',
  IsFavoriteLoading = 'favorite/isFavoriteLoading',
  LoadFavoriteFilms = 'favorite/LoadFavoriteFilms',
  LoadFilmComments = 'film/loadFilmComments',
  LoadSimilarFilms = 'film/loadSimilarFilms',
  LoadCurrentFilm = 'film/loadCurrentFilm',
  IsCommentPosting = 'film/isCommentPosting',
  UserLoginError = 'user/userLoginError',
  LoadUserInfo = 'user/loadUserInfo',
  RequireLogout = 'user/requireLogout',
  RequireAuthorization = 'user/requireAuthorization',
  RedirectToRoute = 'route/redirectToRoute',
  RedirectTo404 = 'route/redirectTo404',
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
  | ReturnType<typeof isFavoriteLoading>
  | ReturnType<typeof setIsPromoFavoriteLoading>
  | ReturnType<typeof loadFavoriteFilms>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof loadCurrentFilm>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadFilmComments>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof redirectTo404>
  | ReturnType<typeof loadUserInfo>
  | ReturnType<typeof userLoginError>
  | ReturnType<typeof isCommentPosting>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
