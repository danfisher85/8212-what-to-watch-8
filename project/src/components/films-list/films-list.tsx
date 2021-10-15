import {useState} from 'react';
import {Film} from 'types/film';
import FilmCard from 'components/film-card/film-card';

type FilmsListProps = {
  films: Film[];
};

function FilmsList(props: FilmsListProps): JSX.Element {
  const {films} = props;

  const [, setActiveFilm] = useState<Film | null>(null);

  const changeActiveFilm = (film: Film | null) => {
    setActiveFilm(film);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        <FilmCard key={film.id} film={film} setActiveFilm={changeActiveFilm} />,
      )}
    </div>
  );
}

export default FilmsList;
