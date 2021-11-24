import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {Films} from 'types/film';

export const getFavoriteFilms = (state: State): Films => state[StoreNameSpace.FAVORITE].favoriteFilms;
