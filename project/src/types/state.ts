import {AuthorizationStatus} from 'configs/auth-status';
import {Film, Films, GenreName} from 'types/film';
import {UserInfo} from 'types/user-info';
import {Comments} from 'types/comment';

export type UserAuthorization = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo;
  loginError: string;
};

export type Genres = {
  currentGenre: GenreName;
  genres: Array<GenreName>;
}

export type State = {
  films: Films;
  filteredFilms: Films;
  currentPage: number;
  isDataLoaded: boolean;
};

export type FilmState = {
  currentFilm: Film | null;
  similarFilms: Films;
  filmComments: Comments;
  isCurrentFilmLoaded: boolean;
  isCommentPosting: boolean;
};

export type FavoriteFilmsState = {
  favoriteFilms: Films;
};

export type PromoFilmState = {
  promoFilm: Film | null;
};
