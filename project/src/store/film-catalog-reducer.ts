import {Actions, ActionType} from 'types/action';
import {State} from 'types/state';
import {ALL_GENRES_ITEM} from 'store/current-genre';
import {AuthorizationStatus} from 'configs/auth-status';

const initialState = {
  currentGenre: ALL_GENRES_ITEM,
  genres: [],
  filteredFilms: [],
  films: [],
  currentPage: 1,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
    case ActionType.LoadFilms:
      return {...state, films: action.payload.films, genres: action.payload.genres, filteredFilms: action.payload.filteredFilms, isDataLoaded: true};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    default:
      return state;
  }
};

export {filmCatalogReducer};
