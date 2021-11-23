import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute} from 'configs/routes';
import {AuthorizationStatus} from 'configs/auth-status';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {History} from 'history';
import {getAuthorizationStatus} from 'store/user-authorization/selectors';

type RenderFuncProps = {
  history: History<unknown>;
};

type PrivateRouteProps = RouteProps & {
  component: (props: RenderFuncProps) => JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, component: Component} = props;
  const authorizationStatus = useTypedSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      component={(routeProps: RenderFuncProps) => {
        if (authorizationStatus === AuthorizationStatus.Auth) {
          return <Component {...routeProps} />;
        }
        return <Redirect to={AppRoute.SignIn} />;
      }}
    />
  );
}

export default PrivateRoute;
