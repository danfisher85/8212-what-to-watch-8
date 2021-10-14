import {useState} from 'react';
import {Films} from 'types/film';
import FilmCard from 'components/film-card/film-card';

type FilmComponentProps = {
  films: Films;
};

function FilmsList(props: FilmComponentProps): JSX.Element {
  const {films} = props;

  const [activeFilm, setActiveFilm] = useState(0);

  return (
    <div className="catalog__films-list" data-active-film={activeFilm} onMouseOver={() => setActiveFilm(1)}>
      {films.map((film, index) => {
        return (
          <FilmCard id={film.id} previewImage={film.previewImage} name={film.name} />
        )
      })}
    </div>
  );
}

export default FilmsList;
