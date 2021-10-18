import {Films} from 'types/film';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import FilmsList from 'components/films-list/films-list';

type MyListScreenProps = {
  films: Films
};

function MyListScreen(props: MyListScreenProps): JSX.Element {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />

      </section>

      <footer className="page-footer">
        <Logo isInFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
