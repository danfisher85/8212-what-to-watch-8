import {Actions, ActionType} from 'types/action';
import {CatalogState} from 'types/state';

export const initialState = {
  filteredFilms: [],
  films: [],
  currentPage: 1,
  isDataLoaded: false,
};

const catalogFilmsReducer = (state: CatalogState = initialState, action: Actions): CatalogState => {
  switch (action.type) {
    case ActionType.SetDataLoaded:
      return {...state, isDataLoaded: action.payload};
    case ActionType.SetFilmsByPage:
      return {...state, filteredFilms: action.payload};
    case ActionType.GetFilmsByGenre:
      return {...state, filteredFilms: action.payload};
    case ActionType.SetLoadMoreFilms:
      return {...state, currentPage: action.payload};
    case ActionType.SetFilms:
      return {...state, films: action.payload};
    case ActionType.ResetFilms:
      return {...initialState};
    default:
      return state;
  }
};

export {catalogFilmsReducer};
