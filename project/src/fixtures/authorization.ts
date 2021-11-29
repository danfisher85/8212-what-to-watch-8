import {datatype, internet} from 'faker';
import {AuthData} from 'types/auth-data';
import {AuthInfo, ServerAuthInfo} from 'types/user-info';

export const createFakeAuthorizationInfo = (): AuthInfo => ({
  id: datatype.number(),
  email: internet.email(),
  name: internet.userName(),
  avatarUrl: internet.url(),
  token: datatype.uuid(),
});

export const createFakeServerAuthorizationInfo = (): ServerAuthInfo => ({
  id: datatype.number(),
  email: internet.email(),
  name: internet.userName(),
  'avatar_url': internet.url(),
  token: datatype.uuid(),
});

export const createFakeLoginData = (): AuthData => ({
  email: internet.email(),
  password: internet.password(),
});
