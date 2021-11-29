import {datatype} from 'faker';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from 'services/api';
import {fetchFilmsAction, fetchFavoriteFilmsAction, fetchPromoFilmAction, fetchCurrentFilmAction, fetchSimilarFilmsAction, fetchFilmCommentsAction} from 'store/api-actions';
import {APIRoute} from 'configs/routes';
import {adaptFilmToClient} from 'services/adapters';
import {State} from 'types/state';
import {
  setDataLoaded,
  setFilms,
  loadFavoriteFilms,
  setGenres,
  setFilmsByPage,
  loadPromoFilm,
  loadCurrentFilm,
  loadSimilarFilms,
  loadFilmComments
} from 'store/action';
import {getGenresList} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

import {createFakeServerFilms, createFakeServerFilm} from 'fixtures/film';
import {comments} from 'fixtures/comment';

const fakeFilmId = datatype.number();
const fakeServerFilm = createFakeServerFilm();
const adaptedFakeFilm = adaptFilmToClient(fakeServerFilm);
const fakeServerFilms = createFakeServerFilms();
const adaptedFakeFilms = fakeServerFilms.map((serverFilm) => adaptFilmToClient(serverFilm));
const initialAdaptedFakeFilms = adaptedFakeFilms.slice(0, FILM_PER_PAGE);
const fakeGenres = getGenresList(adaptedFakeFilms);

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore();
  });

  it('should fetch films data and sets films initial', async () => {
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, fakeServerFilms);

    await store.dispatch(fetchFilmsAction());

    expect(store.getActions()).toEqual([
      setFilms(adaptedFakeFilms),
      setGenres(fakeGenres),
      setFilmsByPage(initialAdaptedFakeFilms),
      setDataLoaded(true),
    ]);
  });

  it('should fetch favorite films', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, fakeServerFilms);

    await store.dispatch(fetchFavoriteFilmsAction());

    expect(store.getActions()).toEqual([
      loadFavoriteFilms(adaptedFakeFilms),
    ]);
  });

  it('should fetch promo film', async () => {
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, fakeServerFilm);

    await store.dispatch(fetchPromoFilmAction());

    expect(store.getActions()).toEqual([
      loadPromoFilm(adaptedFakeFilm),
    ]);
  });

  it('should fetch current film', async () => {
    mockAPI
      .onGet(`/films/${fakeFilmId}`)
      .reply(200, fakeServerFilm);

    await store.dispatch(fetchCurrentFilmAction(fakeFilmId));

    expect(store.getActions()).toEqual([
      loadCurrentFilm(adaptedFakeFilm),
    ]);
  });

  it('should fetch similar films', async () => {
    mockAPI
      .onGet(`/films/${fakeFilmId}/similar`)
      .reply(200, fakeServerFilms);

    await store.dispatch(fetchSimilarFilmsAction(fakeFilmId));

    expect(store.getActions()).toEqual([
      loadSimilarFilms(adaptedFakeFilms),
    ]);
  });

  it('should fetch film comments', async () => {
    mockAPI
      .onGet(`/comments/${fakeFilmId}`)
      .reply(200, comments);

    await store.dispatch(fetchFilmCommentsAction(fakeFilmId));

    expect(store.getActions()).toEqual([
      loadFilmComments(comments),
    ]);
  });
});
