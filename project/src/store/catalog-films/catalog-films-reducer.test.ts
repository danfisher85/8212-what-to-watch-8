import {catalogFilmsReducer, initialState} from 'store/catalog-films/catalog-films-reducer';
import {setDataLoaded, setFilmsByPage, getFilmsByGenre, setLoadMoreFilms, setFilms, resetFilms} from 'store/action';
import {filterFilmsByGenre} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

import {films} from 'fixtures/film';

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
    expect(catalogFilmsReducer(initialState, setFilms(films)))
      .toEqual({
        ...initialState,
        films: films,
      });
  });

  it('should set initial films', () => {
    expect(catalogFilmsReducer(initialState, setFilmsByPage(films)))
      .toEqual({
        ...initialState,
        filteredFilms: films,
      });
  });

  it('should get films by genre', () => {
    expect(catalogFilmsReducer(initialState, getFilmsByGenre(films, CURRENT_GENRE, CURRENT_PAGE)))
      .toEqual({
        ...initialState,
        filteredFilms: filterFilmsByGenre(films, CURRENT_GENRE).slice(0, CURRENT_PAGE * FILM_PER_PAGE),
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
