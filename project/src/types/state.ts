import {AuthorizationStatus} from 'configs/auth-status';
import {Film, Films, GenreName} from 'types/film';
import {UserInfo} from 'types/user-info';
import {Comments} from 'types/comment';
import {UserInfoError} from 'types/user-info';
import {RootState} from 'store/root-reducer';

export type CatalogState = {
  films: Films;
  filteredFilms: Films;
  currentPage: number;
  isDataLoaded: boolean;
};

export type UserAuthorization = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserInfo;
  loginError: UserInfoError;
};

export type Genres = {
  currentGenre: GenreName;
  genres: Array<GenreName>;
}

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

export type State = RootState;
