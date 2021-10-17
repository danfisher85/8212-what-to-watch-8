import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import {AuthorizationStatus, CURRENT_FILM} from 'configs/misc';
import PrivateRoute from 'components/private-route/private-route';
import MainScreen from 'components/main-screen/main-screen';
import SignInScreen from 'components/sign-in-screen/sign-in-screen';
import MyListScreen from 'components/my-list-screen/my-list-screen';
import PlayerScreen from 'components/player-screen/player-screen';
import FilmScreen from 'components/film-screen/film-screen';
import AddReviewScreen from 'components/add-review-screen/add-review-screen';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import {Film} from 'types/film';

interface AppScreenProps {
  films: Film[],
}

function App(props: AppScreenProps): JSX.Element {
  const {films} = props;

  const currentFilm = films[CURRENT_FILM];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen films={films} />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignInScreen} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen films={films} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen film={currentFilm}/>
        </Route>
        <Route exact path={AppRoute.Film} component={(params: any) => {
          const {match} = params;

          // eslint-disable-next-line no-console
          console.log(match.params?.id);

          return (
            <FilmScreen film={currentFilm} films={films} />
          );
        }}
        />
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen film={currentFilm}/>
        </Route>
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
