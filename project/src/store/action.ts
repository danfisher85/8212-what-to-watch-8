import {ActionType, ChangeGenreAction, GetFilmsByGenreAction} from 'types/action';
import {Films} from 'types/film';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (films: Films): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: films,
});
