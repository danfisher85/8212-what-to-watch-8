import {Link, generatePath} from 'react-router-dom';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import {AppRoute} from 'configs/routes';
import {Film} from 'types/film';

interface PromoFilmCardProps {
  promoFilm: Film;
}

function PromoFilmCard(props: PromoFilmCardProps): JSX.Element {
  const {promoFilm} = props;

  const pathToFilmPlayer = generatePath(AppRoute.Player, {
    id: promoFilm.id,
  });

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={pathToFilmPlayer} className="btn btn--play film-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use href="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <Link to={AppRoute.MyList} className="btn btn--list film-card__button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use href="#add"></use>
                </svg>
                <span>My list</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmCard;
