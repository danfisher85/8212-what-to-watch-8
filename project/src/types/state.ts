import {AuthorizationStatus} from 'configs/auth-status';
import {Films, GenreName} from 'types/film';
import {UserInfo} from 'types/user-info';

export type State = {
  currentGenre: GenreName;
  genres: Array<GenreName>;
  films: Films;
  filteredFilms: Films;
  currentPage: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  userInfo: UserInfo;
}
