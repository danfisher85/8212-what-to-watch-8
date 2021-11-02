// import {GenreName} from 'types/film';
import {films} from 'fixtures/films';
import {Actions, ActionType} from 'types/action';
import {State} from 'types/state';
import {ALL_GENRES_ITEM} from 'configs/film-filter';
import {getGenresList} from 'utils/film';

const initialState = {
  currentGenre: ALL_GENRES_ITEM,
  genres: getGenresList(films),
  films: films,
};

const filmListReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, currentGenre: state.currentGenre};
    case ActionType.GetFilmsByGenre:
      return {...state, films: state.films};
    default:
      return state;
  }
};

export {filmListReducer};
