import {Actions, ActionType} from 'types/action';
import {PromoFilmState} from 'types/state';

const initialState = {
  promoFilm: null,
};

const promoFilmReducer = (state: PromoFilmState = initialState, action: Actions): PromoFilmState => {
  if (action.type === ActionType.LoadPromoFilm) {
    return {...state, promoFilm: action.payload};
  }

  return state;
};

export {promoFilmReducer};
