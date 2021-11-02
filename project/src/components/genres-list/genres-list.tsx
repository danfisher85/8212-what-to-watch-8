// import {Genres} from 'types/film';
import clsx from 'clsx';

interface GenresListProps {
  genres: string[];
  currentGenre: string;
  handleGenreClick: (genre: string) => void;
}

function GenresList({genres, currentGenre, handleGenreClick}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={clsx(['catalog__genres-item', {'catalog__genres-item--active': genre === currentGenre}])}
          onClick={() => {
            handleGenreClick(genre);
          }}
        >
          <span className="catalog__genres-link">{genre}</span>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
