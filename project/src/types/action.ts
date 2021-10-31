import {GenreName} from 'types/film';

export enum ActionType {
  ChangeGenre = 'film/changeGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: GenreName;
}

export type Actions = ChangeGenreAction;
