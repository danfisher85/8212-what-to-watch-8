import {ActionType} from 'types/action';
import {GenreName} from 'types/film';

export const ChangeGenreAction = (genre: GenreName) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});
