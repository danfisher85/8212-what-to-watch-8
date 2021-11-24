import {generatePath} from 'react-router-dom';
import {
  setDataLoaded,
  setFilms,
  // setIsFavoriteLoading,
  setIsPromoFavoriteLoading,
  loadFavoriteFilms,
  setGenres,
  setFilmsByPage,
  loadPromoFilm,
  loadCurrentFilm,
  loadSimilarFilms,
  loadFilmComments,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadUserInfo,
  userLoginError,
  isCommentPosting
} from 'store/action';
import {APIRoute, AppRoute} from 'configs/routes';
import {ThunkActionResult} from 'types/action';
import {adaptFilmToClient} from 'services/adapters';
import {AuthorizationStatus} from 'configs/auth-status';
import {getGenresList} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';
import {AuthData} from 'types/auth-data';
import {dropToken, saveToken, Token} from 'services/token';
import {adaptAuthInfoToClient} from 'services/adapters';
import {UserInfo} from 'types/user-info';
import {toast} from 'react-toastify';
import {Film} from 'types/film';
import {CommmentPost} from 'types/comment';
import {CommentMessage} from 'types/comment-message';
import {AuthMessage} from 'types/auth-message';

const TOAST_AUTOCLOSE_TIMEOUT = 3000;

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

      dispatch(loadFavoriteFilms(filmsData));
      dispatch(setDataLoaded(true));
    } catch (error) {
      // toast.info(AuthMessage.FAIL_SIGNED);
    }
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Promo);
    const promoFilmData = adaptFilmToClient(data);

    dispatch(loadPromoFilm(promoFilmData));
  };

export const fetchCurrentFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmPath = generatePath(APIRoute.Film, {id});
      const {data: serverCurrentFilm} = await api.get(filmPath);
      const filmData = adaptFilmToClient(serverCurrentFilm);

      dispatch(loadCurrentFilm(filmData));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  };

export const fetchSimilarFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmSimilarPath = generatePath(APIRoute.SimilarFilms, {id});
      const {data: serverSimilarFilms} = await api.get(filmSimilarPath);
      const filteredFilmsData = serverSimilarFilms.filter((film: Film) => film.id !== id);
      const filmsData = filteredFilmsData.map(adaptFilmToClient);

      dispatch(loadSimilarFilms(filmsData));
    } catch (error) {
      // toast.info(AuthMessage.FAIL_SIGNED);
    }
  };

export const fetchFilmCommentsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const filmPath = generatePath(APIRoute.FilmComments, {id});
      const {data: serverFilmComments} = await api.get(filmPath);

      dispatch(loadFilmComments(serverFilmComments));
    } catch (error) {
      // toast.info(AuthMessage.FAIL_SIGNED);
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoute.Login);
      const {data: serverAuthInfo} = response;
      const {id, email, name, avatarUrl, token} = adaptAuthInfoToClient(serverAuthInfo);
      const userInfo: UserInfo = {id, email, name, avatarUrl};

      saveToken(token);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserInfo(userInfo));
    } catch (error) {
      toast.error(AuthMessage.FAIL_SIGNED);
    }
  };

export const loginAction = ({email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.post(APIRoute.Login, {email, password});
      const {data: serverAuthInfo} = response;
      const {id, email: userEmail, name, avatarUrl, token} = adaptAuthInfoToClient(serverAuthInfo);
      const userInfo: UserInfo = {id, email: userEmail, name, avatarUrl};

      saveToken(token);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserInfo(userInfo));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(userLoginError(AuthMessage.FAIL_EMAIL));
      } else {
        toast.error(AuthMessage.FAIL_UNKNOWN);
      }
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const postFilmComment = (id: string, payload: CommmentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const postCommentPath = generatePath(APIRoute.PostComment, {id});
    const filmPath = generatePath(AppRoute.Film, {id});

    dispatch(isCommentPosting(true));
    toast.info(CommentMessage.POST_PROCESSING);

    try {
      await api.post<{token: Token}>(postCommentPath, payload);

      toast.dismiss();
      toast.success(CommentMessage.POST_SUCCESS, {autoClose: TOAST_AUTOCLOSE_TIMEOUT});

      setTimeout(() => {
        dispatch(redirectToRoute(filmPath));
      }, TOAST_AUTOCLOSE_TIMEOUT);
      dispatch(isCommentPosting(false));

    } catch (error) {
      toast.dismiss();
      toast.error(CommentMessage.POST_FAIL);
      dispatch(isCommentPosting(false));
    }
  };

export const postFavoriteFilm = (id: number, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const status = isFavorite ? 0 : 1;
    const postFavoritePath = generatePath(APIRoute.PostFavorite, {id, status});
    dispatch(setIsPromoFavoriteLoading(true));

    try {
      await api.post<{token: Token}>(postFavoritePath);
      dispatch(setIsPromoFavoriteLoading(false));
    } catch (error) {
      dispatch(setIsPromoFavoriteLoading(false));
    }
  };
