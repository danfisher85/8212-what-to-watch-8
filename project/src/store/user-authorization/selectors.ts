import {StoreNameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {AuthorizationStatus} from 'configs/auth-status';
import {UserInfo, UserInfoError} from 'types/user-info';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[StoreNameSpace.USER].authorizationStatus;
export const getLoginError = (state: State): UserInfoError => state[StoreNameSpace.USER].loginError;
export const getUserInfo = (state: State): UserInfo => state[StoreNameSpace.USER].userInfo;
