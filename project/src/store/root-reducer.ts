import {combineReducers} from 'redux';
import {filmCatalogReducer} from 'store/film-catalog-reducer';
import {promoFilmReducer} from 'store/promo-film-reducer';

export const rootReducer = combineReducers({
  filmCatalog: filmCatalogReducer,
  promoFilm: promoFilmReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
