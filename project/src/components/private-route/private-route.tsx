import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import {AuthorizationStatus} from 'configs/auth-status';
import {useTypedSelector} from 'hooks/useTypedSelector';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const {authorizationStatus} = useTypedSelector((state) => state.filmCatalog);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          return render();
        }
        return <Redirect to={AppRoute.SignIn} />;
      }}
    />
  );
}

export default PrivateRoute;
