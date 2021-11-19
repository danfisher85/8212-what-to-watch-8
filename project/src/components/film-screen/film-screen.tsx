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
import {filterFilmsByGenre} from 'utils/film';
import {AppRoute} from 'configs/routes';
import {Films} from 'types/film';
import {Comments} from 'types/comment';
import {useTypedSelector} from 'hooks/useTypedSelector';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import {ThunkAppDispatch} from 'types/action';
import {fetchCurrentFilmAction} from 'store/api-actions';

const SIMILAR_FILMS_COUNT = 4;

interface FilmScreenProps {
  films: Films;
  comments: Comments;
}

function FilmScreen(props: FilmScreenProps): JSX.Element {
  const {films, comments} = props;
  const {currentFilm} = useTypedSelector((state) => state.currentFilm);
  const {id}: {id: string} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkAppDispatch)(fetchCurrentFilmAction(+id));
  }, [dispatch, id]);

  if (currentFilm === null) {
    return <NotFoundScreen />;
  }
  const {director, rating, scoresCount, description, starring, runTime, genre, released, backgroundColor} = currentFilm;

  const pathToFilmPlayer = generatePath(AppRoute.Player, {
    id: currentFilm.id,
  });

  const pathToAddReview = generatePath(AppRoute.AddReview, {
    id: currentFilm.id,
  });

  const similarFilms = filterFilmsByGenre(films, currentFilm.genre).slice(0, SIMILAR_FILMS_COUNT);

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
                <Link to={pathToAddReview} className="btn film-card__button">
                  Add review
                </Link>
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
              <FilmTabsReviews title="Reviews" comments={comments} />
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
