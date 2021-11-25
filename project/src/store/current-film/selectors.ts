import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {Film, Films} from 'types/film';
import {Comments} from 'types/comment';

export const getCurrentFilm = (state: State): Film | null => state[StoreNameSpace.Current].currentFilm;
export const getSimilarFilms = (state: State): Films => state[StoreNameSpace.Current].similarFilms;
export const getFilmComments = (state: State): Comments => state[StoreNameSpace.Current].filmComments;
export const getIsCommentPosting = (state: State): boolean => state[StoreNameSpace.Current].isCommentPosting;
export const getIsFavoriteLoading = (state: State): boolean => state[StoreNameSpace.Current].isFavoriteLoading;
