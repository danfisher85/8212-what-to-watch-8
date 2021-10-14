import {useState} from 'react';
import {Films} from 'types/film';
import FilmCard from 'components/film-card/film-card';

type FilmsListProps = {
  films: Films;
};

function FilmsList(props: FilmsListProps): JSX.Element {
  const {films} = props;

  const [activeFilm, setActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list" data-active-film={activeFilm} onMouseEnter={() => setActiveFilm(1)} onMouseLeave={() => setActiveFilm(0)}>
      {films.map((film) =>
        <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} />,
      )}
    </div>
  );
}

export default FilmsList;
