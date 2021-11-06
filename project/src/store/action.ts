import {ActionType, ChangeGenreAction, GetFilmsByGenreAction} from 'types/action';
import {Films} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (films: Films, genre: string): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: filterFilmsByGenre(films, genre),
});
