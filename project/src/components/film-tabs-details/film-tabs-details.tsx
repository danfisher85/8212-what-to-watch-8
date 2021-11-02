import {Fragment} from 'react';
import {getFormattedRunTime} from 'utils/date';
import {Film} from 'types/film';

type FilmProps = Pick<Film, 'director' | 'starring' | 'runTime' | 'genre' | 'released'>;
type FilmTabsDetailsProps = FilmProps & {
  title: string;
};

function FilmTabsDetails({title, director, starring, runTime, genre, released}: FilmTabsDetailsProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row" data-title={title}>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring?.map((actor) => (
              <Fragment key={actor}>
                {actor}
                <br />
              </Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getFormattedRunTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmTabsDetails;
