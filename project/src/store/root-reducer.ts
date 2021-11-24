import {combineReducers} from 'redux';
import {catalogFilmsReducer} from 'store/catalog-films/catalog-films-reducer';
import {promoFilmReducer} from 'store/promo-film/promo-film-reducer';
import {favoriteFilmsReducer} from 'store/favorite-films/favorite-films-reducer';
import {currentFilmReducer} from 'store/current-film/current-film-reducer';
import {userAuthorizationReducer} from 'store/user-authorization/user-authorization-reducer';
import {genresReducer} from 'store/genres/genres-reducer';

export enum StoreNameSpace {
  Catalog = 'CATALOG',
  Promo = 'PROMO',
  Favorite = 'FAVORITE',
  Current = 'CURRENT',
  User = 'USER',
  Genres = 'GENRES',
}

export const rootReducer = combineReducers({
  [StoreNameSpace.Catalog]: catalogFilmsReducer,
  [StoreNameSpace.Promo]: promoFilmReducer,
  [StoreNameSpace.Favorite]: favoriteFilmsReducer,
  [StoreNameSpace.Current]: currentFilmReducer,
  [StoreNameSpace.User]: userAuthorizationReducer,
  [StoreNameSpace.Genres]: genresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
