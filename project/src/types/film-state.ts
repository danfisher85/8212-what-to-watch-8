import {Film, Films} from 'types/film';

export type FilmState = {
  currentFilm: Film | null;
  similarFilms: Films;
  isCurrentFilmLoaded: boolean;
}
