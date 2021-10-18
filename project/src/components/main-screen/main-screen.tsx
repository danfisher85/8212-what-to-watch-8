import Logo from 'components/logo/logo';
import PromoFilmCard from 'components/promo-film-card/promo-film-card';
import FilmsList from 'components/films-list/films-list';
import {Film} from 'types/film';

type MainScreenProps = {
  promoFilm: Film,
  films: Film[]
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const {promoFilm, films} = props;

  return (
    <>
      <PromoFilmCard promoFilm={promoFilm}/>

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

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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

export default MainScreen;
