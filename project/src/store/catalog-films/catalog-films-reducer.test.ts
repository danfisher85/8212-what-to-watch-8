import {catalogFilmsReducer, initialState} from 'store/catalog-films/catalog-films-reducer';
import {setDataLoaded, setFilmsByPage, getFilmsByGenre, setLoadMoreFilms, setFilms, resetFilms} from 'store/action';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

import {createFakeFilms} from 'fixtures/film';

const CURRENT_GENRE = 'Comedy';
const CURRENT_PAGE = 2;

describe('Reducer: catalogFilmsReducer', () => {

  it('should set data as loaded', () => {
    expect(catalogFilmsReducer(initialState, setDataLoaded(true)))
      .toEqual({
        ...initialState,
        isDataLoaded: true,
      });
  });

  it('should set all films', () => {
    const fakeFilms = createFakeFilms();

    expect(catalogFilmsReducer(initialState, setFilms(fakeFilms)))
      .toEqual({
        ...initialState,
        films: fakeFilms,
      });
  });

  it('should set initial films', () => {
    const fakeFilms = createFakeFilms();

    expect(catalogFilmsReducer(initialState, setFilmsByPage(fakeFilms)))
      .toEqual({
        ...initialState,
        filteredFilms: fakeFilms,
      });
  });

  it('should get films by genre', () => {
    const fakeFilms = createFakeFilms();

    expect(catalogFilmsReducer(initialState, getFilmsByGenre(fakeFilms, CURRENT_GENRE, CURRENT_PAGE)))
      .toEqual({
        ...initialState,
        filteredFilms: filterFilmsByGenre(fakeFilms, CURRENT_GENRE).slice(0, CURRENT_PAGE * FILM_PER_PAGE),
      });
  });

  it('should set current page number value', () => {
    expect(catalogFilmsReducer(initialState, setLoadMoreFilms(CURRENT_PAGE)))
      .toEqual({
        ...initialState,
        currentPage: CURRENT_PAGE + 1,
      });
  });

  it('should reset state to initial', () => {
    expect(catalogFilmsReducer(initialState, resetFilms()))
      .toEqual(initialState);
  });
});
