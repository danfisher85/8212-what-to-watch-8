import {ActionType, ChangeGenreAction, GetFilmsByGenreAction, SetLoadMoreFilmsActions} from 'types/action';
import {Films, GenreName} from 'types/film';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

export const changeGenre = (genre: GenreName): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilmsByGenre = (films: Films, genre: GenreName, currentPage: number): GetFilmsByGenreAction => ({
  type: ActionType.GetFilmsByGenre,
  payload: filterFilmsByGenre(films.slice(0, currentPage * FILM_PER_PAGE), genre),
});

export const setLoadMoreFilms = (currentPage: number): SetLoadMoreFilmsActions => ({
  type: ActionType.SetLoadMoreFilms,
  payload: currentPage + 1,
});
