import {Films, GenreName} from 'types/film';

export enum ActionType {
  ChangeGenre = 'film/changeGenre',
  GetFilmsByGenre = 'film/getFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: GenreName;
}

export type GetFilmsByGenreAction = {
  type: ActionType.GetFilmsByGenre;
  payload: Films;
}

export type Actions = ChangeGenreAction | GetFilmsByGenreAction;
