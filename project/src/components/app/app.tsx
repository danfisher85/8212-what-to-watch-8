import {Switch, Route, BrowserRouter} from 'react-router-dom';
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

interface AppScreenProps {
  title: string,
  genre: string,
  year: number
}

function App(props: AppScreenProps): JSX.Element {
  const {title, genre, year} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen title={title} genre={genre} year={year} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route exact path={AppRoute.Film}>
          <FilmScreen />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
