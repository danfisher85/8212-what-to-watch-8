import Logo from 'components/logo/logo';
import PromoFilmCard from 'components/promo-film-card/promo-film-card';
import FilmsList from 'components/films-list/films-list';
import GenresList from 'components/genres-list/genres-list';
import {Film} from 'types/film';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import {changeGenre} from 'store/action';
import {filterFilmsByGenre} from 'utils/film';

type MainScreenProps = {
  promoFilm: Film;
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const {promoFilm} = props;

  const {genres, films, currentGenre} = useTypedSelector((state) => state.filmList);
  const dispatch = useDispatch();

  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  return (
    <>
      {typeof promoFilm === 'object' && promoFilm && <PromoFilmCard promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} currentGenre={currentGenre} handleGenreClick={handleGenreClick} />
          <FilmsList films={filterFilmsByGenre(films, currentGenre)} />

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
