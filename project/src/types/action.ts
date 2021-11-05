import {Films} from 'types/film';

export enum ActionType {
  ChangeGenre = 'film/changeGenre',
  GetFilmsByGenre = 'film/getFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type GetFilmsByGenreAction = {
  type: ActionType.GetFilmsByGenre;
  payload: Films;
}

export type Actions = ChangeGenreAction | GetFilmsByGenreAction;
