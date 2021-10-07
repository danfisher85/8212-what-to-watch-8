import Logo from 'components/logo/logo';
import FilmCard from 'components/film-card/film-card';

type MainScreenProps = {
  title: string,
  genre: string,
  year: number
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const {title, genre, year} = props;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo light={false} />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="temp-link.html" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="{title} poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="temp-link-placeholder.html" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
