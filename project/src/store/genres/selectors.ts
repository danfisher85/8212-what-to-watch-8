import {NameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {GenreName} from 'types/film';

export const getCurrentGenre = (state: State): GenreName => state[NameSpace.genres].currentGenre;
export const getGenres = (state: State): Array<GenreName> => state[NameSpace.genres].genres;
