import {initialState, favoriteFilmsReducer} from 'store/favorite-films/favorite-films-reducer';
import {loadFavoriteFilms} from 'store/action';
import {films} from 'fixtures/film';

describe('Reducer: favoriteFilmsReducer', () => {

  it('should load favorite films', () => {
    expect(favoriteFilmsReducer(initialState, loadFavoriteFilms(films)))
      .toEqual({
        ...initialState,
        favoriteFilms: films,
      });
  });
});
