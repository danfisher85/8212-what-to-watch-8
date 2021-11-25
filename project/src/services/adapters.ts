import {Film, ServerFilm} from 'types/film';
import {AuthInfo, ServerAuthInfo} from 'types/user-info';

export const adaptFilmToClient = (serverFilm: ServerFilm): Film => ({
  id: serverFilm['id'],
  name: serverFilm['name'],
  posterImage: serverFilm['poster_image'],
  previewImage: serverFilm['preview_image'],
  backgroundImage: serverFilm['background_image'],
  backgroundColor: serverFilm['background_color'],
  videoLink: serverFilm['video_link'],
  previewVideoLink: serverFilm['preview_video_link'],
  description: serverFilm['description'],
  rating: serverFilm['rating'],
  scoresCount: serverFilm['scores_count'],
  director: serverFilm['director'],
  actors: serverFilm['starring'],
  runTime: serverFilm['run_time'],
  genre: serverFilm['genre'],
  released: serverFilm['released'],
  isFavorite: serverFilm['is_favorite'],
});

export const adaptAuthInfoToClient = (authInfo: ServerAuthInfo): AuthInfo => ({
  id: authInfo['id'],
  email: authInfo['email'],
  name: authInfo['name'],
  avatarUrl: authInfo['avatar_url'],
  token: authInfo['token'],
});
