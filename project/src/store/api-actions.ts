import {loadFilms, loadPromoFilm} from 'store/action';
import {APIRoute} from 'configs/routes';
import {ThunkActionResult} from 'types/action';
import {ServerFilm} from 'types/film';
import {adaptFilmToClient} from 'services/adapters';

export const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverFilms} = await api.get(APIRoute.Films);
    const filmsData = serverFilms.map((serverFilm: ServerFilm) => adaptFilmToClient(serverFilm));
    dispatch(loadFilms(filmsData));
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Promo);
    const promoFilmData = adaptFilmToClient(data);
    dispatch(loadPromoFilm(promoFilmData));
  };
