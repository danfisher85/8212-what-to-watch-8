import {GenreName} from 'types/film';
import {films} from 'fixtures/films';
import {Actions, ActionType} from 'types/action';
import {State} from 'types/state';

const initialState = {
  genre: 'All Genres' as GenreName,
  films: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: state.genre, films: state.films};
    default:
      return {...state};
  }
};

export {reducer};
