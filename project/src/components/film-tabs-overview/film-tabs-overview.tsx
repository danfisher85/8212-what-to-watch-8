import {Film} from 'types/film';

interface FilmTabsOverviewProps {
  title: string;
  film: Film;
}

function FilmTabsOverview({title, film}: FilmTabsOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">
            {film.scoresCount > 0 ? `${film.scoresCount} ratings` : 'No ratings'}
          </span>
        </p>
      </div>

      <div className="film-card__text" data-title={title}>
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>{film.starring?.length && `Starring: ${film.starring.join(', ')} and other`}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmTabsOverview;
