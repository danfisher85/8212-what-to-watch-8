import {combineReducers} from 'redux';
import {filmListReducer} from 'store/film-list-reducer';

export const rootReducer = combineReducers({
  filmList: filmListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;