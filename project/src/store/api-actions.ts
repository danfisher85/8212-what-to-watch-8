import {ThunkActionResult} from 'types/action';
import {loadFilms} from 'store/action';
import {APIRoute} from 'configs/routes';
import {Films} from 'types/film';

export const fetchFilmsAction = (): ThunkActionResult => async (dispatch, _getState, api): Promise<void> => {
  const {data} = await api.get<Films>(APIRoute.Films);
  dispatch(loadFilms(data));
}
