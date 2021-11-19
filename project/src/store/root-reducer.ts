import {combineReducers} from 'redux';
import {filmCatalogReducer} from 'store/reducers/film-catalog-reducer';
import {promoFilmReducer} from 'store/reducers/promo-film-reducer';
import {favoriteFilmsReducer} from 'store/reducers/favorite-films-reducer';

export const rootReducer = combineReducers({
  filmCatalog: filmCatalogReducer,
  promoFilm: promoFilmReducer,
  favoriteFilms: favoriteFilmsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
