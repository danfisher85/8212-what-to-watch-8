import {useCallback, useState} from 'react';
import {Film, Films} from 'types/film';
import FilmCard from 'components/film-card/film-card';
import VideoPlayer from 'components/video-player/video-player';

interface FilmsListProps {
  films: Films;
}

const getFilmByState = (activeFilm: Film | null, currentFilmId: number) => {
  if (activeFilm?.id === currentFilmId) {
    return <VideoPlayer poster={activeFilm.posterImage} src={activeFilm.previewVideoLink} isActive />;
  }

  return null;
};

function FilmsList(props: FilmsListProps): JSX.Element {
  const {films} = props;

  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  const handleMouseEnter = useCallback((film: Film) => {
    setActiveFilm(film);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveFilm(null);
  }, []);

  if (films.length === 0) {
    return <h2>Ooops! There are no films :(</h2>;
  }

  return (
    <div className="catalog__films-list" data-film-id={activeFilm?.id}>
      {films?.map((film) => (
        <FilmCard key={film.id} film={film} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}>
          {getFilmByState(activeFilm, film.id)}
        </FilmCard>
      ))}
    </div>
  );
}

export default FilmsList;
