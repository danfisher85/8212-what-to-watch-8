import {Switch, Route, Router} from 'react-router-dom';
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
import {isCheckedAuth} from 'utils/user';
import {useTypedSelector} from 'hooks/useTypedSelector';
import browserHistory from 'browser-history';
import {getIsDataLoaded} from 'store/catalog-films/selectors';
import {getAuthorizationStatus} from 'store/user-authorization/selectors';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  const isDataLoaded = useTypedSelector(getIsDataLoaded);
  const authorizationStatus = useTypedSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root} component={MainScreen} />
        <Route exact path={AppRoute.SignIn}>
          <ToastContainer />
          <SignInScreen />
        </Route>
        <PrivateRoute exact path={AppRoute.MyList} component={MyListScreen} />
        <Route exact path={AppRoute.Player} component={PlayerScreen} />
        <Route exact path={AppRoute.Film} component={FilmScreen} />
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
