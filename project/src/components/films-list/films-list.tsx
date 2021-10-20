import {useState} from 'react';
import {Film, Films} from 'types/film';
import FilmCard from 'components/film-card/film-card';

interface FilmsListProps {
  films: Films;
}

function FilmsList(props: FilmsListProps): JSX.Element {
  const {films} = props;

  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  const handleMouseEnter = (film: Film) => {
    setActiveFilm(film);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
  };

  if (films.length) {
    return (
      <div className="catalog__films-list" data-film-id={activeFilm?.id}>
        {films.map((film) => (
          <FilmCard key={film.id} film={film} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
        ))}
      </div>
    );
  }

  return <h2>Ooops! There are no films :(</h2>;
}

export default FilmsList;
