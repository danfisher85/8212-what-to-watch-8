import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import ReactRouter from 'react-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from 'configs/auth-status';
import {AppRoute} from 'configs/routes';
import App from 'components/app/app';

import {promoFilm, films} from 'fixtures/film';
import {comments} from 'fixtures/comment';

const TEST_FILM_ID = 4;

const mockStore = configureMockStore();

const storeAuthorized = mockStore({
  CATALOG: {
    filteredFilms: films,
    films: films,
    currentPage: 1,
    isDataLoaded: true,
  },
  PROMO: {
    promoFilm: promoFilm,
    isPromoFavoriteLoading: false,
  },
  FAVORITE: {
    favoriteFilms: films,
  },
  CURRENT: {
    currentFilm: promoFilm,
    similarFilms: films,
    filmComments: comments,
    isCurrentFilmLoaded: true,
    isCommentPosting: false,
    isFavoriteLoading: false,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    userInfo: {
      id: 1,
      email: 'someemail@test.com',
      name: 'John',
      avatarUrl: 'Doe',
    },
    loginError: '',
  },
  GENRES: {
    currentGenre: 'All genres',
    genres: ['All genres', 'Comedy', 'Crime', 'Adventure', 'Mystery', 'History', 'Drama', 'Fantasy'],
  },
});

const storeNotAuthorized = mockStore({
  CATALOG: {
    filteredFilms: films,
    films: films,
    currentPage: 1,
    isDataLoaded: true,
  },
  PROMO: {
    promoFilm: promoFilm,
    isPromoFavoriteLoading: false,
  },
  FAVORITE: {
    favoriteFilms: films,
  },
  CURRENT: {
    currentFilm: promoFilm,
    similarFilms: films,
    filmComments: comments,
    isCurrentFilmLoaded: true,
    isCommentPosting: false,
    isFavoriteLoading: false,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userInfo: {
      id: 0,
      email: '',
      name: '',
      avatarUrl: '',
    },
    loginError: '',
  },
  GENRES: {
    currentGenre: 'All genres',
    genres: ['All genres', 'Comedy', 'Crime', 'Adventure', 'Mystery', 'History', 'Drama', 'Fantasy'],
  },
});

const history = createMemoryHistory();
const fakeAppAuthorized = (
  <Provider store={storeAuthorized}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

const fakeAppNotAuthorized = (
  <Provider store={storeNotAuthorized}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

storeAuthorized.dispatch = jest.fn();

describe('Application Routing', () => {
  beforeEach(() => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({id: String(TEST_FILM_ID)});
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Root);
    render(fakeAppAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Catalog/i)).toBeInTheDocument();
  });

  it('should render "MyListScreen" when user navigate to "/mylist"', () => {
    history.push(AppRoute.MyList);
    render(fakeAppAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/My list/i)).toBeInTheDocument();
  });

  it('should render "PlayerScreen" when user navigate to "/player/:id"', () => {
    history.push(AppRoute.Player);
    render(fakeAppAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Toggler/i)).toBeInTheDocument();
  });

  it('should render "FilmScreen" when user navigate to "/films/:id"', () => {
    history.push(AppRoute.Film);
    render(fakeAppAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId('Single Film')).toBeInTheDocument();
  });

  it('should render "AddReviewScreen" when user navigate to "/films/:id"', () => {
    history.push(AppRoute.AddReview);
    render(fakeAppAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Add review/i)).toBeInTheDocument();
  });

  it('should redirect to 404 page when user navigate to not existing url, e.g. "/not-existing-address"', () => {
    history.push('/not-existing-address');
    render(fakeAppAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).toBeInTheDocument();
  });

  it('should render "SignInScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);
    render(fakeAppNotAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "SignInScreen" when user navigate to "/mylist"', () => {
    history.push(AppRoute.MyList);
    render(fakeAppNotAuthorized);

    expect(screen.queryByText(/OOOOPS! Page not Found/i)).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
});
