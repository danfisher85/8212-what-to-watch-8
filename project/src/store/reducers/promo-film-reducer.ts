import {Actions, ActionType} from 'types/action';
import {PromoFilmState} from 'types/promo-film-state';

const initialState = {
  promoFilm: null,
};

const promoFilmReducer = (state: PromoFilmState = initialState, action: Actions): PromoFilmState => {
  switch (action.type) {
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload};
    default:
      return state;
  }
};

export {promoFilmReducer};
