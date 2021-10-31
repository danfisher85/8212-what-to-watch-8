import {ActionType, ChangeGenreAction} from 'types/action';
import {GenreName} from 'types/film';

export const changeGenre = (genre: GenreName): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});
