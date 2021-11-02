import {ActionType, ChangeGenreAction} from 'types/action';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});
