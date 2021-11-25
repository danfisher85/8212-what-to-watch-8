import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {GenreName} from 'types/film';

export const getCurrentGenre = (state: State): GenreName => state[StoreNameSpace.Genres].currentGenre;
export const getGenres = (state: State): Array<GenreName> => state[StoreNameSpace.Genres].genres;
