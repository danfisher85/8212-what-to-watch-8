import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import {AuthorizationStatus} from 'configs/auth-status';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {History} from 'history';

type RenderFuncProps = {
  history: History<unknown>;
};

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const {authorizationStatus} = useTypedSelector((state) => state.filmCatalog);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          return render(routeProps);
        }
        return <Redirect to={AppRoute.SignIn} />;
      }}
    />
  );
}

export default PrivateRoute;
