import {Films, GenreName} from 'types/film';

export enum ActionType {
  ChangeGenre = 'catalog/changeGenre',
  GetFilmsByGenre = 'catalog/getFilmsByGenre',
  SetLoadMoreFilms = 'catalog/setLoadMoreFilms',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: GenreName;
}

export type GetFilmsByGenreAction = {
  type: ActionType.GetFilmsByGenre;
  payload: Films;
}

export type SetLoadMoreFilmsActions = {
  type: ActionType.SetLoadMoreFilms;
  payload: number;
}

export type Actions = ChangeGenreAction | GetFilmsByGenreAction | SetLoadMoreFilmsActions;
