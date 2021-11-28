import {initialState, userAuthorizationReducer} from 'store/user-authorization/user-authorization-reducer';
import {requireAuthorization, requireLogout, loadUserInfo, userLoginError} from 'store/action';
import {AuthorizationStatus} from 'configs/auth-status';

const USER_INFO = {
  id: 2,
  email: 'test@test.com',
  name: 'John',
  avatarUrl: 'http://sometestdomain.com',
};

const USER_INFO_ERROR = 'Test Error Message';

describe('Reducer: userAuthorizationReducer', () => {

  it('should change user authorization to "authorized"', () => {
    expect(userAuthorizationReducer(initialState, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.Auth,
      });
  });

  it('should change user authorization to "not authorized"', () => {
    expect(userAuthorizationReducer(initialState, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NoAuth,
      });
  });

  it('should set user authorization to "not authorized" without passing a payload', () => {
    expect(userAuthorizationReducer(initialState, requireLogout()))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NoAuth,
      });
  });

  it('should set a user info', () => {
    expect(userAuthorizationReducer(initialState, loadUserInfo(USER_INFO)))
      .toEqual({
        ...initialState,
        userInfo: USER_INFO,
      });
  });

  it('should display user error login information', () => {
    expect(userAuthorizationReducer(initialState, userLoginError(USER_INFO_ERROR)))
      .toEqual({
        ...initialState,
        loginError: USER_INFO_ERROR,
      });
  });
});
