import {combineReducers} from 'redux';
import {filmCatalogReducer} from 'store/reducers/film-catalog-reducer';
import {promoFilmReducer} from 'store/reducers/promo-film-reducer';
import {favoriteFilmsReducer} from 'store/reducers/favorite-films-reducer';
import {currentFilmReducer} from 'store/reducers/current-film-reducer';

export const rootReducer = combineReducers({
  filmCatalog: filmCatalogReducer,
  promoFilm: promoFilmReducer,
  favoriteFilms: favoriteFilmsReducer,
  currentFilm: currentFilmReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
