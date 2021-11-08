import {ActionType, ChangeGenreAction, GetFilmsByGenreAction, SetLoadMoreFilmsAction, ResetFilmsAction} from 'types/action';
import {Films, GenreName} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

export const changeGenre = (genre: GenreName): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (films: Films, genre: GenreName, currentPage: number): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: filterFilmsByGenre(films, genre).slice(0, currentPage * FILM_PER_PAGE),
});

export const setLoadMoreFilms = (currentPage: number): SetLoadMoreFilmsAction => ({
  type: ActionType.SetLoadMoreFilms,
  payload: currentPage + 1,
});

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});
