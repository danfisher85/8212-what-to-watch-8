import {useState} from 'react';
import {Link, generatePath} from 'react-router-dom';
import VideoPlayer from 'components/video-player/video-player';
import {AppRoute} from 'configs/routes';
import {Film} from 'types/film';

interface FilmCardProps {
  film: Film;
  handleMouseEnter: (film: Film) => void;
  handleMouseLeave: () => void;
}

const getFilmByState = (isActive: boolean, film: Film) => {
  if (isActive) {
    return <VideoPlayer poster={film.posterImage} src={film.previewVideoLink} isActive={isActive} />;
  }

  return <img src={film.previewImage} alt={`${film.name} poster`} width="280" height="175" />;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, handleMouseEnter, handleMouseLeave} = props;
  const [isActive, setIsActive] = useState<boolean>(false);

  const pathToFilm = generatePath(AppRoute.Film, {
    id: film.id,
  });

  return (
    <article
      className="small-film-card catalog__films-card"
      data-id={film.id}
      onMouseEnter={() => {
        handleMouseEnter(film);
        setIsActive(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsActive(false);
      }}
    >
      <div className="small-film-card__image">{getFilmByState(isActive, film)}</div>
      <h3 className="small-film-card__title">
        <Link to={pathToFilm} className="small-film-card__link">
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
