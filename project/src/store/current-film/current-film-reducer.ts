import {Actions, ActionType} from 'types/action';
import {FilmState} from 'types/state';

const initialState = {
  currentFilm: null,
  similarFilms: [],
  filmComments: [],
  isCurrentFilmLoaded: false,
  isCommentPosting: false,
  isFavoriteLoading: false,
};

const currentFilmReducer = (state: FilmState = initialState, action: Actions): FilmState => {
  switch (action.type) {
    case ActionType.LoadCurrentFilm:
      return {...state, currentFilm: action.payload, isCurrentFilmLoaded: true};
    case ActionType.LoadSimilarFilms:
      return {...state, similarFilms: action.payload};
    case ActionType.LoadFilmComments:
      return {...state, filmComments: action.payload};
    case ActionType.IsCommentPosting:
      return {...state, isCommentPosting: action.payload};
    case ActionType.IsFavoriteLoading:
      return {...state, isFavoriteLoading: action.payload};
    default:
      return state;
  }
};

export {currentFilmReducer};
