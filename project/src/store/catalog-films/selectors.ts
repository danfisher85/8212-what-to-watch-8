import {NameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {Films} from 'types/film';

export const getFilms = (state: State): Films => state[NameSpace.catalog].films;
export const getFilteredFilms = (state: State): Films => state[NameSpace.catalog].filteredFilms;
export const getCurrentPage = (state: State): number => state[NameSpace.catalog].currentPage;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.catalog].isDataLoaded;
