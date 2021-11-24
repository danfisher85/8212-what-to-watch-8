import {Film} from 'types/film';
import {setFilmRatingText} from 'utils/film';

type FilmProps = Pick<Film, 'rating' | 'scoresCount' | 'description' | 'director' | 'actors'>;
type FilmTabsOverviewProps = FilmProps & {
  title: string;
};

const PRIMARY_CAST_NUMBER = 3;

function FilmTabsOverview({
  title,
  rating,
  scoresCount,
  description,
  director,
  actors,
}: FilmTabsOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{setFilmRatingText(rating)}</span>
          <span className="film-rating__count">{scoresCount > 0 ? `${scoresCount} ratings` : 'No ratings'}</span>
        </p>
      </div>

      <div className="film-card__text" data-title={title}>
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>{actors?.length && `Starring: ${actors.slice(0, PRIMARY_CAST_NUMBER).join(', ')} and other`}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmTabsOverview;
