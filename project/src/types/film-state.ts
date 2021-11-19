import {Film} from 'types/film';

export type FilmState = {
  currentFilm: Film | null;
  isCurrentFilmLoaded: boolean;
}
