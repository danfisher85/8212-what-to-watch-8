import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {Film, Films} from 'types/film';
import {Comments} from 'types/comment';

export const getCurrentFilm = (state: State): Film | null => state[StoreNameSpace.CURRENT].currentFilm;
export const getSimilarFilms = (state: State): Films => state[StoreNameSpace.CURRENT].similarFilms;
export const getFilmComments = (state: State): Comments => state[StoreNameSpace.CURRENT].filmComments;
export const getIsCommentPosting = (state: State): boolean => state[StoreNameSpace.CURRENT].isCommentPosting;
export const getIsFavoriteLoading = (state: State): boolean => state[StoreNameSpace.CURRENT].isFavoriteLoading;
