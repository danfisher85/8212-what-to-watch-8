import {initialState, currentFilmReducer} from 'store/current-film/current-film-reducer';
import {loadCurrentFilm, loadSimilarFilms, loadFilmComments, isCommentPosting, setIsFavoriteLoading} from 'store/action';
import {createFakeFilm, createFakeFilms} from 'fixtures/film';
import {comments} from 'fixtures/comment';

const fakeFilm = createFakeFilm();
const fakeFilms = createFakeFilms();

describe('Reducer: currentFilmReducer', () => {

  it('should load current film and change current film loaded flag', () => {
    expect(currentFilmReducer(initialState, loadCurrentFilm(fakeFilm)))
      .toEqual({
        ...initialState,
        currentFilm: fakeFilm,
        isCurrentFilmLoaded: true,
      });
  });

  it('should load similar films', () => {
    expect(currentFilmReducer(initialState, loadSimilarFilms(fakeFilms)))
      .toEqual({
        ...initialState,
        similarFilms: fakeFilms,
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
