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
    expect(genresReducer(initialState, changeGenre(CURRENT_GENRE)))
      .toEqual({
        ...initialState,
        currentGenre: CURRENT_GENRE,
      });
  });

  it('should set film genres', () => {
    expect(genresReducer(initialState, setGenres(GENRES)))
      .toEqual({
        ...initialState,
        genres: GENRES,
      });
  });
});
