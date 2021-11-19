import browserHistory from 'store/browser-history';
import {Middleware} from 'redux';
import {filmCatalogReducer} from 'store/reducers/film-catalog-reducer';
import {ActionType} from 'types/action';

type Reducer = ReturnType<typeof filmCatalogReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

