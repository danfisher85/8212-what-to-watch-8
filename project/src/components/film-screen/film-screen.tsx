import {useState, MouseEvent} from 'react';
import {Link, generatePath} from 'react-router-dom';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import FilmsList from 'components/films-list/films-list';
import FilmTabs from 'components/film-tabs/film-tabs';
import FilmTabsOverview from 'components/film-tabs-overview/film-tabs-overview';
import FilmTabsReviews from 'components/film-tabs-reviews/film-tabs-reviews';
import FilmTabsDetails from 'components/film-tabs-details/film-tabs-details';
import {AppRoute} from 'configs/routes';
import {Film, Films} from 'types/film';
import {Tabs} from 'types/tab';

interface FilmScreenProps {
  film: Film;
  similarFilms: Films;
}

const tabs: Tabs = [
  {
    id: 'overview',
    label: 'Overview',
    isActive: true,
  },
  {
    id: 'details',
    label: 'Details',
  },
  {
    id: 'reviews',
    label: 'Reviews',
  },
];

const getActiveFilmTab = (tab: string) => {
  switch (tab) {
    case 'overview':
      return <FilmTabsOverview />;
    case 'details':
      return <FilmTabsDetails />;
    case 'reviews':
      return <FilmTabsReviews />;
    default:
      return <FilmTabsOverview />;
  }
};

function FilmScreen(props: FilmScreenProps): JSX.Element {
  const {film, similarFilms} = props;

  const pathToFilmPlayer = generatePath(AppRoute.Player, {
    id: film.id,
  });

  const pathToAddReview = generatePath(AppRoute.AddReview, {
    id: film.id,
  });

  const [activeTab, setActiveTab] = useState<string>('overview');

  const handleOnClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.href);
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
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
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <FilmTabs tabs={tabs} handleOnClick={handleOnClick}>
              {getActiveFilmTab(activeTab)}
            </FilmTabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <footer className="page-footer">
          <Logo isInFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmScreen;
