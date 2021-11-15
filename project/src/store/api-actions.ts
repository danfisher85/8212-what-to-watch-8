import {setDataLoaded, setFilms, setGenres, setFilmsByPage, loadPromoFilm, requireAuthorization} from 'store/action';
import {APIRoute} from 'configs/routes';
import {ThunkActionResult} from 'types/action';
import {adaptFilmToClient} from 'services/adapters';
import {AuthorizationStatus} from 'configs/auth-status';
import {getGenresList} from 'utils/film';
import {FILM_PER_PAGE} from 'store/film-per-page';

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
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };
