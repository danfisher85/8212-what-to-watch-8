import {Switch, Route, Router, Redirect, RouteComponentProps} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import PrivateRoute from 'components/private-route/private-route';
import MainScreen from 'components/main-screen/main-screen';
import SignInScreen from 'components/sign-in-screen/sign-in-screen';
import MyListScreen from 'components/my-list-screen/my-list-screen';
import PlayerScreen from 'components/player-screen/player-screen';
import FilmScreen from 'components/film-screen/film-screen';
import AddReviewScreen from 'components/add-review-screen/add-review-screen';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import LoadingScreen from 'components/loading-screen/loading-screen';
import {getFilmById} from 'utils/film';
import {isCheckedAuth} from 'utils/user';
import {useTypedSelector} from 'hooks/useTypedSelector';
import browserHistory from 'browser-history';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {films} from 'fixtures/films';

interface RouteInfo {
  id: string;
}

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useTypedSelector((state) => state.filmCatalog);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <ToastContainer />
          <SignInScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} component={MyListScreen} />
        <Route
          exact
          path={AppRoute.Player}
          component={({match}: RouteComponentProps<RouteInfo>) => {
            const film = getFilmById(+match.params.id, films);

            if (film) {
              return <PlayerScreen film={film} />;
            }
            return <Redirect to={AppRoute.Root} />;
          }}
        />
        <Route exact path={AppRoute.Film}>
          <FilmScreen />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <ToastContainer />
          <AddReviewScreen />
        </Route>
        <Route component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}

export default App;
