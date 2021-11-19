import {
  setDataLoaded,
  setFilms,
  setFavoriteFilms,
  setGenres,
  setFilmsByPage,
  loadPromoFilm,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadUserInfo,
  userLoginError
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
const AUTH_FAIL_LOGIN_EMAIL = 'Please enter a valid email address';
const AUTH_FAIL_LOGIN_UNKNOWN = 'Please enter a valid email address';

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

export const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data: favoriteFilms} = await api.get(APIRoute.Favorite);
      const filmsData = favoriteFilms.map(adaptFilmToClient);

      dispatch(setFavoriteFilms(filmsData));
      dispatch(setDataLoaded(true));
    } catch (error) {
      // toast.info(AUTH_FAIL_MESSAGE);
    }
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
        const {id, email, name, avatarUrl, token} = adaptAuthInfoToClient(serverAuthInfo);
        const userInfo: UserInfo = {id, email, name, avatarUrl};

        saveToken(token);

        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(loadUserInfo(userInfo));
      });
    } catch (error) {
      toast.error(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(APIRoute.Login, {email, password}).then(({data: serverAuthInfo}) => {
        const {id, email: userEmail, name, avatarUrl, token} = adaptAuthInfoToClient(serverAuthInfo);
        const userInfo: UserInfo = {id, email: userEmail, name, avatarUrl};

        saveToken(token);

        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(loadUserInfo(userInfo));
        dispatch(redirectToRoute(AppRoute.Root));
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch(userLoginError(AUTH_FAIL_LOGIN_EMAIL));
      } else {
        toast.error(AUTH_FAIL_LOGIN_UNKNOWN);
      }
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
