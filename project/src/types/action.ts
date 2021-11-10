import {changeGenre, getFilmsByGenre, setLoadMoreFilms, resetFilms} from 'store/action';

export enum ActionType {
  ChangeGenre = 'catalog/changeGenre',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
  ResetFilms = 'catalog/resetFilms',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof getFilmsByGenre>
  | ReturnType<typeof setLoadMoreFilms>
  | ReturnType<typeof resetFilms>;
