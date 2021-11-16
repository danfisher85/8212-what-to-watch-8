import {Switch, Route, BrowserRouter, Redirect, RouteComponentProps} from 'react-router-dom';
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
import {Comments} from 'types/comment';
import {isCheckedAuth} from 'utils/user';
import {useTypedSelector} from 'hooks/useTypedSelector';

import {films} from 'fixtures/films';

interface AppScreenProps {
  comments: Comments;
}

interface RouteInfo {
  id: string;
}

function App(props: AppScreenProps): JSX.Element {
  const {comments} = props;
  const {authorizationStatus, isDataLoaded} = useTypedSelector((state) => state.filmCatalog);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignInScreen} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen films={films} />}
        />
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
        <Route
          exact
          path={AppRoute.Film}
          component={({match}: RouteComponentProps<RouteInfo>) => {
            const film = getFilmById(+match.params.id, films);

            if (film) {
              return <FilmScreen films={films} film={film} comments={comments} />;
            }
            return <Redirect to={AppRoute.Root} />;
          }}
        />
        <Route
          exact
          path={AppRoute.AddReview}
          component={({match}: RouteComponentProps<RouteInfo>) => {
            const film = getFilmById(+match.params.id, films);

            if (film) {
              return <AddReviewScreen film={film} />;
            }
            return <Redirect to={AppRoute.Root} />;
          }}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
