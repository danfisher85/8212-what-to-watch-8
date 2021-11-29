import {initialState, favoriteFilmsReducer} from 'store/favorite-films/favorite-films-reducer';
import {loadFavoriteFilms} from 'store/action';
import {createFakeFilms} from 'fixtures/film';

const fakeFilms = createFakeFilms();

describe('Reducer: favoriteFilmsReducer', () => {

  it('should load favorite films', () => {
    expect(favoriteFilmsReducer(initialState, loadFavoriteFilms(fakeFilms)))
      .toEqual({
        ...initialState,
        favoriteFilms: fakeFilms,
      });
  });
});
