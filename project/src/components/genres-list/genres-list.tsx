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
        >
          <a
            className="catalog__genres-link"
            onClick={() => {
              handleGenreClick(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
