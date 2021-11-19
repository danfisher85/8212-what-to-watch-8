import {Actions, ActionType} from 'types/action';
import {FilmState} from 'types/film-state';

const initialState = {
  currentFilm: null,
  isCurrentFilmLoaded: false,
};

const currentFilmReducer = (state: FilmState = initialState, action: Actions): FilmState => {
  if (action.type === ActionType.LoadCurrentFilm) {
    return {...state, currentFilm: action.payload, isCurrentFilmLoaded: true};
  }

  return state;
};

export {currentFilmReducer};
