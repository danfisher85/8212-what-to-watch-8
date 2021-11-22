import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {AppRoute, APIRoute} from 'configs/routes';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {AuthorizationStatus} from 'configs/auth-status';
import {logoutAction} from 'store/api-actions';
import {getAuthorizationStatus, getUserInfo} from 'store/user-authorization/selectors';

function UserBlock(): JSX.Element {
  const authorizationStatus = useTypedSelector(getAuthorizationStatus);
  const userInfo = useTypedSelector(getUserInfo);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUserAvatarClick = () => {
    history.push(AppRoute.MyList);
  };
  const handleUserLogOutClick = () => {
    dispatch(logoutAction());
  };
  const handleUserLogInClick = () => {
    history.push(APIRoute.Login);
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth && (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" onClick={handleUserAvatarClick} />
            </div>
          </li>
          <li className="user-block__item">
            <span className="user-block__link" onClick={handleUserLogOutClick}>
              Sign out
            </span>
          </li>
        </>
      )}
      {authorizationStatus !== AuthorizationStatus.Auth && (
        <li className="user-block__item">
          <span className="user-block__link" onClick={handleUserLogInClick}>
            Sign in
          </span>
        </li>
      )}
    </ul>
  );
}

export default UserBlock;
