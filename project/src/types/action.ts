import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from 'types/state';
import {changeGenre, getFilmsByGenre, setLoadMoreFilms, resetFilms, loadFilms, requireAuthorization} from 'store/action';

export enum ActionType {
  ChangeGenre = 'catalog/changeGenre',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
  ResetFilms = 'catalog/resetFilms',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getFilmsByGenre>
  | ReturnType<typeof setLoadMoreFilms>
  | ReturnType<typeof resetFilms>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
