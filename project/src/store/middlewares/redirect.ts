import browserHistory from 'browser-history';
import {Middleware} from 'redux';
import {catalogFilmsReducer} from 'store/catalog-films/catalog-films-reducer';
import {currentFilmReducer} from 'store/current-film/current-film-reducer';
import {ActionType} from 'types/action';

type Reducer =
  | ReturnType<typeof catalogFilmsReducer>
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

