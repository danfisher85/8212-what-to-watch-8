import {AuthorizationStatus} from 'configs/auth-status';
import {Films, GenreName} from 'types/film';

export type State = {
  currentGenre: GenreName;
  genres: Array<GenreName>;
  films: Films;
  filteredFilms: Films;
  currentPage: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
}
