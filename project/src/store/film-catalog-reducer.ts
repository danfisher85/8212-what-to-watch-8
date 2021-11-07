import {films} from 'fixtures/films';
import {Actions, ActionType} from 'types/action';
import {State} from 'types/state';
import {ALL_GENRES_ITEM} from 'store/current-genre';
import {getGenresList} from 'utils/film';

const initialState = {
  currentGenre: ALL_GENRES_ITEM,
  genres: getGenresList(films),
  filteredFilms: films,
  films,
};

const filmCatalogReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload};
    case ActionType.GetFilmsByGenre:
      return {...state, filteredFilms: action.payload};
    default:
      return state;
  }
};

export {filmCatalogReducer};
