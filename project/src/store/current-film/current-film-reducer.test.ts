import {initialState, currentFilmReducer} from 'store/current-film/current-film-reducer';
import {loadCurrentFilm, loadSimilarFilms, loadFilmComments, isCommentPosting, setIsFavoriteLoading} from 'store/action';

import {promoFilm as film} from 'fixtures/film';
import {films} from 'fixtures/film';
import {comments} from 'fixtures/comment';

describe('Reducer: currentFilmReducer', () => {

  it('should load current film and change current film loaded flag', () => {
    expect(currentFilmReducer(initialState, loadCurrentFilm(film)))
      .toEqual({
        ...initialState,
        currentFilm: film,
        isCurrentFilmLoaded: true,
      });
  });

  it('should load similar films', () => {
    expect(currentFilmReducer(initialState, loadSimilarFilms(films)))
      .toEqual({
        ...initialState,
        similarFilms: films,
      });
  });

  it('should load film comments', () => {
    expect(currentFilmReducer(initialState, loadFilmComments(comments)))
      .toEqual({
        ...initialState,
        filmComments: comments,
      });
  });

  it('should enable commenting posting flag', () => {
    expect(currentFilmReducer(initialState, isCommentPosting(true)))
      .toEqual({
        ...initialState,
        isCommentPosting: true,
      });
  });

  it('should enable film favorite loading flag', () => {
    expect(currentFilmReducer(initialState, setIsFavoriteLoading(true)))
      .toEqual({
        ...initialState,
        isFavoriteLoading: true,
      });
  });

});
