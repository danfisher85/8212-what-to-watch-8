import clsx from 'clsx';
import {Link, generatePath} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import {AppRoute} from 'configs/routes';
import {Film} from 'types/film';
import IconPlay from 'components/icon-play/icon-play';
import IconAdd from 'components/icon-add/icon-add';
import IconInList from 'components/icon-inlist/icon-inlist';
import {AuthorizationStatus} from 'configs/auth-status';
import {getAuthorizationStatus} from 'store/user-authorization/selectors';

interface PromoFilmCardProps {
  promoFilm: Film;
  isFavorite: boolean;
  isPromoFavoriteLoading: boolean;
  handleFavoriteChange: (filmId: number, status: boolean) => void;
}

function PromoFilmCard({
  promoFilm,
  isFavorite,
  isPromoFavoriteLoading,
  handleFavoriteChange,
}: PromoFilmCardProps): JSX.Element {
  const {id: filmId} = promoFilm;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const history = useHistory();

  const pathToFilmPlayer = generatePath(AppRoute.Player, {
    id: promoFilm.id,
  });

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      handleFavoriteChange(filmId, isFavorite);
    } else {
      history.push(AppRoute.MyList);
    }
  };

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
                <IconPlay />
              </Link>
              <button
                type="button"
                className={clsx(['btn btn--list film-card__button', {'btn--loading': isPromoFavoriteLoading}])}
                onClick={handleFavoriteClick}
              >
                {isFavorite ? <IconInList /> : <IconAdd />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmCard;
