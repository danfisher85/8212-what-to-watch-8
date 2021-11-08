import {Films, GenreName} from 'types/film';

export enum ActionType {
  ChangeGenre = 'catalog/changeGenre',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
  ResetFilms = 'catalog/resetFilms',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: GenreName;
}

export type GetFilmsByGenreAction = {
  type: ActionType.GetFilmsByGenre;
  payload: Films;
}

export type SetLoadMoreFilmsAction = {
  type: ActionType.SetLoadMoreFilms;
  payload: number;
}

export type ResetFilmsAction = {
  type: ActionType.ResetFilms;
}

export type Actions = ChangeGenreAction | GetFilmsByGenreAction | SetLoadMoreFilmsAction | ResetFilmsAction;
