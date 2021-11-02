import Logo from 'components/logo/logo';
import PromoFilmCard from 'components/promo-film-card/promo-film-card';
import FilmsList from 'components/films-list/films-list';
import GenresList from 'components/genres-list/genres-list';
import {Film} from 'types/film';
import {useTypedSelector} from 'hooks/useTypedSelector';

type MainScreenProps = {
  promoFilm: Film;
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const {promoFilm} = props;

  const {genres, films, currentGenre} = useTypedSelector((state) => state.filmList);

  // eslint-disable-next-line no-console
  console.log(currentGenre);

  // eslint-disable-next-line no-console
  console.log(genres);

  return (
    <>
      {typeof promoFilm === 'object' && promoFilm && <PromoFilmCard promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} />
          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
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
