import {ActionType, ChangeGenreAction, GetFilmsByGenreAction} from 'types/action';
import {Films, GenreName} from 'types/film';

export const changeGenre = (genre: GenreName): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (films: Films): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: films,
});
