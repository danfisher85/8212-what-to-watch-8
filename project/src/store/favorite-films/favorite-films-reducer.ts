import {Actions, ActionType} from 'types/action';
import {FavoriteFilmsState} from 'types/state';

export const initialState = {
  favoriteFilms: [],
};

const favoriteFilmsReducer = (state: FavoriteFilmsState = initialState, action: Actions): FavoriteFilmsState => {
  switch (action.type) {
    case ActionType.LoadFavoriteFilms:
      return {...state, favoriteFilms: action.payload};
    default:
      return state;
  }
};

export {favoriteFilmsReducer};
