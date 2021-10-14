import {Films} from 'types/film';
import FilmCard from 'components/film-card/film-card';

type FilmComponentProps = {
  films: Films;
};

function FilmsList(props: FilmComponentProps): JSX.Element {
  const {films} = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        return (
          <FilmCard id={film.id} previewImage={film.previewImage} name={film.name}/>
        )
      })}
    </div>
  );
}

export default FilmsList;
