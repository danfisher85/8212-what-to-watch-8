import {NameSpace} from 'store/root-reducer';
import {State} from 'types/state';
import {AuthorizationStatus} from 'configs/auth-status';
import {UserInfo, UserInfoError} from 'types/user-info';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getLoginError = (state: State): UserInfoError => state[NameSpace.user].loginError;
export const getUserInfo = (state: State): UserInfo => state[NameSpace.user].userInfo;
