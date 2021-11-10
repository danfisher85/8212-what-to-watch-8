import {films} from 'fixtures/films';
import {Actions, ActionType} from 'types/action';
import {State} from 'types/state';
import {ALL_GENRES_ITEM} from 'store/current-genre';
import {getGenresList} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

const initialState = {
  currentGenre: ALL_GENRES_ITEM,
  genres: getGenresList(films),
  filteredFilms: films.slice(0, FILM_PER_PAGE),
  films,
  currentPage: 1,
};

const filmCatalogReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetFilmsByGenre:
      return {...state, filteredFilms: action.payload};
    case ActionType.SetLoadMoreFilms:
      return {...state, currentPage: action.payload};
    case ActionType.ResetFilms:
      return {...initialState};
    default:
      return state;
  }
};

export {filmCatalogReducer};
