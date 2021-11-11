import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, BrowserRouter, Redirect, RouteComponentProps} from 'react-router-dom';
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
import {State} from 'types/state';
import {getFilmById} from 'utils/film';
import {Film} from 'types/film';
import {Comments} from 'types/comment';

import {films} from 'fixtures/films';

interface AppScreenProps {
  promoFilm: Film;
  comments: Comments;
}

interface RouteInfo {
  id: string;
}

const mapStateToProps = ({isDataLoaded}: State) => ({
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedAppProps = PropsFromRedux & AppScreenProps;

function App(props: ConnectedAppProps): JSX.Element {
  const {promoFilm, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen promoFilm={promoFilm} />
        </Route>
        <Route exact path={AppRoute.SignIn} component={SignInScreen} />
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen films={films} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
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

export {App};
export default connector(App);
