import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {Film} from 'types/film';

export const getPromoFilm = (state: State): Film | null => state[StoreNameSpace.Promo].promoFilm;
export const getIsPromoFavoriteLoading = (state: State): boolean => state[StoreNameSpace.Promo].isPromoFavoriteLoading;
