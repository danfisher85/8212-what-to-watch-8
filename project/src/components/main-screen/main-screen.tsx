import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Footer from 'components/footer/footer';
import PromoFilmCard from 'components/promo-film-card/promo-film-card';
import FilmsList from 'components/films-list/films-list';
import GenresList from 'components/genres-list/genres-list';
import FilmMoreButton from 'components/film-more-button/film-more-button';
import {GenreName} from 'types/film';
import {changeGenre, getFilmsByGenre, setLoadMoreFilms} from 'store/action';
import {filterFilmsByGenre} from 'utils/film';
import {getFilms, getFilteredFilms, getCurrentPage} from 'store/catalog-films/selectors';
import {getCurrentGenre, getGenres} from 'store/genres/selectors';
import {getPromoFilm, getIsPromoFavoriteLoading} from 'store/promo-film/selectors';
import {postPromoFavoriteFilm, fetchPromoFilmAction} from 'store/api-actions';

function MainScreen(): JSX.Element {
  const films = useSelector(getFilms);
  const filteredFilms = useSelector(getFilteredFilms);
  const currentPage = useSelector(getCurrentPage);
  const genres = useSelector(getGenres);
  const currentGenre = useSelector(getCurrentGenre);
  const promoFilm = useSelector(getPromoFilm);
  const isPromoFavoriteLoading = useSelector(getIsPromoFavoriteLoading);

  const dispatch = useDispatch();

  const allFilteredFilms = filterFilmsByGenre(films, currentGenre);
  const isMoreButtonVisible = allFilteredFilms.length > filteredFilms.length;

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch, isPromoFavoriteLoading]);

  const handleGenreClick = (genre: GenreName) => {
    dispatch(setLoadMoreFilms(0));
    dispatch(changeGenre(genre));
    dispatch(getFilmsByGenre(films, genre, 1));
  };

  const handleMoreButtonClick = () => {
    dispatch(setLoadMoreFilms(currentPage));
    dispatch(getFilmsByGenre(films, currentGenre, currentPage + 1));
  };

  const handleFavoriteChange = useCallback(
    (filmId: number, status: boolean) => {
      dispatch(postPromoFavoriteFilm(filmId, status));
    },
    [dispatch],
  );

  return (
    <>
      {typeof promoFilm === 'object' && promoFilm && (
        <PromoFilmCard
          promoFilm={promoFilm}
          handleFavoriteChange={handleFavoriteChange}
          isPromoFavoriteLoading={isPromoFavoriteLoading}
          isFavorite={promoFilm?.isFavorite}
        />
      )}

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
