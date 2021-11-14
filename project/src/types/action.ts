import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from 'types/state';
import {setDataLoaded, changeGenre, setGenres, setFilmsByGenre, getFilmsByGenre, setLoadMoreFilms, resetFilms, setFilms, loadPromoFilm, requireAuthorization} from 'store/action';

export enum ActionType {
  SetDataLoaded = 'data/setDataLoaded',
  ChangeGenre = 'catalog/changeGenre',
  SetGenres = 'data/setGenres',
  SetFilmsByGenre = 'data/setFilmsByGenre',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
  ResetFilms = 'catalog/resetFilms',
  SetFilms = 'data/setFilms',
  LoadPromoFilm = 'data/loadPromoFilm',
  RequireAuthorization = 'user/requireAuthorization',
}

export type Actions =
  | ReturnType<typeof setDataLoaded>
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof setGenres>
  | ReturnType<typeof setFilmsByGenre>
  | ReturnType<typeof getFilmsByGenre>
  | ReturnType<typeof setLoadMoreFilms>
  | ReturnType<typeof resetFilms>
  | ReturnType<typeof setFilms>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof requireAuthorization>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
