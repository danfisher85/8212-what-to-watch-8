import {combineReducers} from 'redux';
import {filmCatalogReducer} from 'store/film-catalog-reducer';

export const rootReducer = combineReducers({
  filmCatalog: filmCatalogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
