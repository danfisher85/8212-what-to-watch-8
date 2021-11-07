import {useDispatch} from 'react-redux';
import Footer from 'components/footer/footer';
import PromoFilmCard from 'components/promo-film-card/promo-film-card';
import FilmsList from 'components/films-list/films-list';
import GenresList from 'components/genres-list/genres-list';
import {Film, GenreName} from 'types/film';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {changeGenre, getFilmsByGenre} from 'store/action';

type MainScreenProps = {
  promoFilm: Film;
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const {promoFilm} = props;

  const {genres, films, filteredFilms, currentGenre} = useTypedSelector((state) => state.filmCatalog);
  const dispatch = useDispatch();

  const handleGenreClick = (genre: GenreName) => {
    dispatch(changeGenre(genre));
    dispatch(getFilmsByGenre(films, genre));
  };

  return (
    <>
      {typeof promoFilm === 'object' && promoFilm && <PromoFilmCard promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} currentGenre={currentGenre} handleGenreClick={handleGenreClick} />
          <FilmsList films={filteredFilms} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
