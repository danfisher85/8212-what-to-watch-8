import {combineReducers} from 'redux';
import {catalogFilmsReducer} from 'store/catalog-films/catalog-films-reducer';
import {promoFilmReducer} from 'store/promo-film/promo-film-reducer';
import {favoriteFilmsReducer} from 'store/favorite-films/favorite-films-reducer';
import {currentFilmReducer} from 'store/current-film/current-film-reducer';
import {userAuthorizationReducer} from 'store/user-authorization/user-authorization-reducer';
import {genresReducer} from 'store/genres/genres-reducer';

export enum NameSpace {
  catalog = 'CATALOG',
  promo = 'PROMO',
  favorite = 'FAVORITE',
  current = 'CURRENT',
  user = 'USER',
  genres = 'GENRES',
}

export const rootReducer = combineReducers({
  [NameSpace.catalog]: catalogFilmsReducer,
  [NameSpace.promo]: promoFilmReducer,
  [NameSpace.favorite]: favoriteFilmsReducer,
  [NameSpace.current]: currentFilmReducer,
  [NameSpace.user]: userAuthorizationReducer,
  [NameSpace.genres]: genresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
