import {Actions, ActionType} from 'types/action';
import {FavoriteFilmsState} from 'types/favorite-films-state';

const initialState = {
  favoriteFilms: [],
};

const favoriteFilmsReducer = (state: FavoriteFilmsState = initialState, action: Actions): FavoriteFilmsState => {
  if (action.type === ActionType.SetFavoriteFilms) {
    return {...state, favoriteFilms: action.payload};
  }

  return state;
};

export {favoriteFilmsReducer};
