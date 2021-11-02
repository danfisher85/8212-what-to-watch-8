// import {Genres} from 'types/film';

interface GenresListProps {
  genres: string[];
}

function GenresList({genres}: GenresListProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className="catalog__genres-item">
          <a href="temp-link-placeholder.html" className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
