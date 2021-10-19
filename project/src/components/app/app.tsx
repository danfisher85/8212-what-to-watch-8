import {Switch, Route, BrowserRouter, RouteComponentProps} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import {AuthorizationStatus} from 'configs/auth-status';
import PrivateRoute from 'components/private-route/private-route';
import MainScreen from 'components/main-screen/main-screen';
import SignInScreen from 'components/sign-in-screen/sign-in-screen';
import MyListScreen from 'components/my-list-screen/my-list-screen';
import PlayerScreen from 'components/player-screen/player-screen';
import FilmScreen from 'components/film-screen/film-screen';
import AddReviewScreen from 'components/add-review-screen/add-review-screen';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import {Film, Films} from 'types/film';

interface AppScreenProps {
  promoFilm: Film,
  similarFilms: Films,
  films: Films,
}

interface RouteInfo {
  id: string;
}

function App(props: AppScreenProps): JSX.Element {
  const {promoFilm, similarFilms, films} = props;

  const getFilmById = (filmId: string) => {
    const foundFilm = films.find((film) => film.id === +filmId);

    if (!foundFilm) {
      throw new Error(`There is no such film with id=${filmId}`);
    }

    return foundFilm;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen promoFilm={promoFilm} films={films} />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignInScreen} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen films={films} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player} component={({match}: RouteComponentProps<RouteInfo>) => {
          const film = getFilmById(match.params.id);
          return (
            <PlayerScreen film={film}/>
          );
        }}
        />
        <Route exact path={AppRoute.Film} component={({match}: RouteComponentProps<RouteInfo>) => {
          const film = getFilmById(match.params.id);
          return (
            <FilmScreen film={film} similarFilms={similarFilms}/>
          );
        }}
        />
        <Route exact path={AppRoute.AddReview} component={({match}: RouteComponentProps<RouteInfo>) => {
          const film = getFilmById(match.params.id);
          return (
            <AddReviewScreen film={film}/>
          );
        }}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
