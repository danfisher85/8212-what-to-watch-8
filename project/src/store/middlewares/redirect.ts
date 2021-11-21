import browserHistory from 'browser-history';
import {Middleware} from 'redux';
import {filmCatalogReducer} from 'store/reducers/film-catalog-reducer';
import {currentFilmReducer} from 'store/reducers/current-film-reducer';
import {ActionType} from 'types/action';

type Reducer =
  | ReturnType<typeof filmCatalogReducer>
  | ReturnType<typeof currentFilmReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

