import {
  setDataLoaded,
  setFilms,
  setGenres,
  setFilmsByPage,
  loadPromoFilm,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadUserInfo
} from 'store/action';
import {APIRoute, AppRoute} from 'configs/routes';
import {ThunkActionResult} from 'types/action';
import {adaptFilmToClient} from 'services/adapters';
import {AuthorizationStatus} from 'configs/auth-status';
import {getGenresList} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';
import {AuthData} from 'types/auth-data';
import {dropToken, saveToken} from 'services/token';
import {adaptAuthInfoToClient} from 'services/adapters';
import {UserInfo} from 'types/user-info';
import {toast} from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Looks like you are not signed :(';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverFilms} = await api.get(APIRoute.Films);
    const filmsData = serverFilms.map(adaptFilmToClient);
    const genresData = getGenresList(filmsData);
    const initialFilmsData = filmsData.slice(0, FILM_PER_PAGE);

    dispatch(setFilms(filmsData));
    dispatch(setGenres(genresData));
    dispatch(setFilmsByPage(initialFilmsData));
    dispatch(setDataLoaded(true));
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Promo);
    const promoFilmData = adaptFilmToClient(data);
    dispatch(loadPromoFilm(promoFilmData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login).then(({data: serverAuthInfo}) => {
        const {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
          token: userToken,
        } = adaptAuthInfoToClient(serverAuthInfo);

        const userInfo: UserInfo = {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
        };

        saveToken(userToken);

        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(loadUserInfo(userInfo));
      });
    } catch (error) {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api
      .post(APIRoute.Login, {email, password})
      .then(({data: serverAuthInfo}) => {
        const {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
          token: userToken,
        } = adaptAuthInfoToClient(serverAuthInfo);

        const userInfo: UserInfo = {
          id: userId,
          email: userEmail,
          name: userName,
          avatarUrl: userAvatarUrl,
        };

        saveToken(userToken);

        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(loadUserInfo(userInfo));
        dispatch(redirectToRoute(AppRoute.Root));
      });
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
