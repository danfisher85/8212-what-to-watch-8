import {Actions, ActionType} from 'types/action';
import {FilmState} from 'types/film-state';

const initialState = {
  currentFilm: null,
  similarFilms: [],
  isCurrentFilmLoaded: false,
};

const currentFilmReducer = (state: FilmState = initialState, action: Actions): FilmState => {
  switch (action.type) {
    case ActionType.LoadCurrentFilm:
      return {...state, currentFilm: action.payload, isCurrentFilmLoaded: true};
    case ActionType.LoadSimilarFilms:
      return {...state, similarFilms: action.payload};
    default:
      return state;
  }
};

export {currentFilmReducer};
