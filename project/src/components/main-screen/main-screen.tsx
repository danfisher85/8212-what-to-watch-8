import {useDispatch} from 'react-redux';
import Footer from 'components/footer/footer';
import PromoFilmCard from 'components/promo-film-card/promo-film-card';
import FilmsList from 'components/films-list/films-list';
import GenresList from 'components/genres-list/genres-list';
import FilmMoreButton from 'components/film-more-button/film-more-button';
import {Film, GenreName} from 'types/film';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {changeGenre, getFilmsByGenre, setLoadMoreFilms} from 'store/action';

type MainScreenProps = {
  promoFilm: Film;
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const {promoFilm} = props;

  const {genres, films, filteredFilms, currentGenre, currentPage} = useTypedSelector((state) => state.filmCatalog);
  const dispatch = useDispatch();

  const isMoreButtonVisible = films.length > filteredFilms.length;

  const handleGenreClick = (genre: GenreName) => {
    dispatch(setLoadMoreFilms(0));
    dispatch(changeGenre(genre));
    dispatch(getFilmsByGenre(films, genre, currentPage));
  };

  const handleMoreButtonClick = () => {
    dispatch(setLoadMoreFilms(currentPage));
    dispatch(getFilmsByGenre(films, currentGenre, currentPage));
  };

  return (
    <>
      {typeof promoFilm === 'object' && promoFilm && <PromoFilmCard promoFilm={promoFilm} />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} currentGenre={currentGenre} handleGenreClick={handleGenreClick} />
          <FilmsList films={filteredFilms} />
          {isMoreButtonVisible && <FilmMoreButton handleMoreButtonClick={handleMoreButtonClick} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
