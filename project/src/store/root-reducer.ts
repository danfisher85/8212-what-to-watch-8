import {combineReducers} from 'redux';
import {catalogFilmsReducer} from 'store/catalog-films/catalog-films-reducer';
import {promoFilmReducer} from 'store/promo-film/promo-film-reducer';
import {favoriteFilmsReducer} from 'store/favorite-films/favorite-films-reducer';
import {currentFilmReducer} from 'store/current-film/current-film-reducer';
import {userAuthorizationReducer} from 'store/user-authorization/user-authorization-reducer';
import {genresReducer} from 'store/genres/genres-reducer';

export enum StoreNameSpace {
  CATALOG = 'CATALOG',
  PROMO = 'PROMO',
  FAVORITE = 'FAVORITE',
  CURRENT = 'CURRENT',
  USER = 'USER',
  GENRES = 'GENRES',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.CATALOG]: catalogFilmsReducer,
  [StoreNameSpace.PROMO]: promoFilmReducer,
  [StoreNameSpace.FAVORITE]: favoriteFilmsReducer,
  [StoreNameSpace.CURRENT]: currentFilmReducer,
  [StoreNameSpace.USER]: userAuthorizationReducer,
  [StoreNameSpace.GENRES]: genresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
