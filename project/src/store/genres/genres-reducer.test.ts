import {initialState, genresReducer} from 'store/genres/genres-reducer';
import {changeGenre, setGenres} from 'store/action';
import {GenreName} from 'types/film';

const CURRENT_GENRE = 'Comedy';
const GENRES: Array<GenreName> = [
  'All genres',
  'Comedy',
  'Crime',
  'Adventure',
  'Mystery',
  'History',
  'Drama',
  'Fantasy',
];

describe('Reducer: genresReducer', () => {

  it('should change genre', () => {
    const currentGenre = changeGenre(CURRENT_GENRE);
    expect(genresReducer(initialState, currentGenre))
      .toEqual({
        ...initialState,
        currentGenre: CURRENT_GENRE,
      });
  });

  it('should set film genres', () => {
    const genreData = setGenres(GENRES);
    expect(genresReducer(initialState, genreData))
      .toEqual({
        ...initialState,
        genres: GENRES,
      });
  });
});
