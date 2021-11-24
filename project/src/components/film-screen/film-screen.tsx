import clsx from 'clsx';
import {useEffect} from 'react';
import {Link, generatePath, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Logo from 'components/logo/logo';
import Footer from 'components/footer/footer';
import UserBlock from 'components/user-block/user-block';
import FilmsList from 'components/films-list/films-list';
import FilmTabs from 'components/film-tabs/film-tabs';
import FilmTabsOverview from 'components/film-tabs-overview/film-tabs-overview';
import FilmTabsDetails from 'components/film-tabs-details/film-tabs-details';
import FilmTabsReviews from 'components/film-tabs-reviews/film-tabs-reviews';
import {AppRoute} from 'configs/routes';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {fetchCurrentFilmAction, fetchSimilarFilmsAction} from 'store/api-actions';
import {AuthorizationStatus} from 'configs/auth-status';
import LoadingScreen from 'components/loading-screen/loading-screen';
import {getAuthorizationStatus} from 'store/user-authorization/selectors';
import {getCurrentFilm, getIsFavoriteLoading, getSimilarFilms} from 'store/current-film/selectors';
import IconPlay from 'components/icon-play/icon-play';
import IconAdd from 'components/icon-add/icon-add';
import IconInList from 'components/icon-inlist/icon-inlist';
import {postFavoriteFilm} from 'store/api-actions';

function FilmScreen(): JSX.Element {
  const currentFilm = useTypedSelector(getCurrentFilm);
  const isFavoriteLoading = useTypedSelector(getIsFavoriteLoading);
  const similarFilms = useTypedSelector(getSimilarFilms);
  const authorizationStatus = useTypedSelector(getAuthorizationStatus);

  const {id: filmId} = useParams<{id: string}>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(+filmId));
    dispatch(fetchSimilarFilmsAction(+filmId));
  }, [dispatch, filmId]);

  if (currentFilm === null) {
    return <LoadingScreen />;
  }
  const {director, rating, scoresCount, description, starring, runTime, genre, released, backgroundColor, isFavorite} =
    currentFilm;

  const pathToFilmPlayer = generatePath(AppRoute.Player, {
    id: currentFilm.id,
  });

  const pathToAddReview = generatePath(AppRoute.AddReview, {
    id: currentFilm.id,
  });

  const handleFavoriteClick = () => {
    dispatch(postFavoriteFilm(+filmId, isFavorite));
  };

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={pathToFilmPlayer} className="btn btn--play film-card__button">
                  <IconPlay />
                </Link>
                <button
                  type="button"
                  className={clsx(['btn btn--list film-card__button', {'btn--loading': isFavoriteLoading}])}
                  onClick={handleFavoriteClick}
                >
                  {isFavorite ? <IconInList /> : <IconAdd />}
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link to={pathToAddReview} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>

            <FilmTabs>
              <FilmTabsOverview
                {...{
                  title: 'Overview',
                  rating,
                  scoresCount,
                  description,
                  director,
                  starring,
                }}
              />
              <FilmTabsDetails
                {...{
                  title: 'Details',
                  director,
                  starring,
                  runTime,
                  genre,
                  released,
                }}
              />
              <FilmTabsReviews title="Reviews" />
            </FilmTabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmScreen;
