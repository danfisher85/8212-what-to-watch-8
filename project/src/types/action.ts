export enum ActionType {
  ChangeGenre = 'film/changeGenre',
  GetFilmsByGenre = 'film/getFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type Actions = ChangeGenreAction;
