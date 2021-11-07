import {ActionType, ChangeGenreAction, GetFilmsByGenreAction} from 'types/action';
import {Films, GenreName} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';

export const changeGenre = (genre: GenreName): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (films: Films, genre: GenreName): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: filterFilmsByGenre(films, genre),
});
