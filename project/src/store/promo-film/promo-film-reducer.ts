import {Actions, ActionType} from 'types/action';
import {PromoFilmState} from 'types/state';

const initialState = {
  promoFilm: null,
  isPromoFavoriteLoading: false,
};

const promoFilmReducer = (state: PromoFilmState = initialState, action: Actions): PromoFilmState => {
  switch (action.type) {
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload};
    case ActionType.SetIsPromoFavoriteLoading:
      return {...state, isPromoFavoriteLoading: action.payload};
    default:
      return state;
  }
};

export {promoFilmReducer};
