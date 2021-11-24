import {NameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {Film, Films} from 'types/film';
import {Comments} from 'types/comment';

export const getCurrentFilm = (state: State): Film | null => state[NameSpace.current].currentFilm;
export const getSimilarFilms = (state: State): Films => state[NameSpace.current].similarFilms;
export const getFilmComments = (state: State): Comments => state[NameSpace.current].filmComments;
export const getIsCommentPosting = (state: State): boolean => state[NameSpace.current].isCommentPosting;
export const getIsFavoriteLoading = (state: State): boolean => state[NameSpace.current].isFavoriteLoading;
