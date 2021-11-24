import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from 'hooks/useTypedSelector';
import Logo from 'components/logo/logo';
import Footer from 'components/footer/footer';
import UserBlock from 'components/user-block/user-block';
import FilmsList from 'components/films-list/films-list';
import {getFavoriteFilms} from 'store/favorite-films/selectors';
import {fetchFavoriteFilmsAction} from 'store/api-actions';

function MyListScreen(): JSX.Element {
  const favoriteFilms = useTypedSelector(getFavoriteFilms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
