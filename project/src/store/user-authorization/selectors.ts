import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {AuthorizationStatus} from 'configs/auth-status';
import {UserInfo, UserInfoError} from 'types/user-info';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[StoreNameSpace.User].authorizationStatus;
export const getLoginError = (state: State): UserInfoError => state[StoreNameSpace.User].loginError;
export const getUserInfo = (state: State): UserInfo => state[StoreNameSpace.User].userInfo;
