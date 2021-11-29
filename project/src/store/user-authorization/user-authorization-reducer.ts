import {Actions, ActionType} from 'types/action';
import {UserAuthorization} from 'types/state';
import {AuthorizationStatus} from 'configs/auth-status';

export const initialState: UserAuthorization = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    id: 0,
    email: '',
    name: '',
    avatarUrl: '',
  },
  loginError: '',
};

const userAuthorizationReducer = (state = initialState, action: Actions): UserAuthorization => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.LoadUserInfo:
      return {...state, userInfo: action.payload};
    case ActionType.UserLoginError:
      return {...state, loginError: action.payload};
    default:
      return state;
  }
};

export {userAuthorizationReducer};
