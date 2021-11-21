import {Film, Films} from 'types/film';
import {Comments} from 'types/comment';

export type FilmState = {
  currentFilm: Film | null;
  similarFilms: Films;
  filmComments: Comments;
  isCurrentFilmLoaded: boolean;
  isCommentPosting: boolean;
}
