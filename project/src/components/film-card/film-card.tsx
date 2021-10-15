import {Link} from 'react-router-dom';
import {Film} from 'types/film';

type FilmCardProps = {
  film: Film,
  setActiveFilm: (film: Film | null) => void,
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, setActiveFilm} = props;

  const handleMouseEnter = () => {
    setActiveFilm(film);
  };

  const handleMouseLeave = () => {
    setActiveFilm(null);
  };

  return (
    <article className="small-film-card catalog__films-card" data-id={film.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
