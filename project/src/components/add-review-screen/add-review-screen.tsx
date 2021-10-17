import {Link} from 'react-router-dom';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import AddReviewForm from 'components/add-review-form/add-review-form';
import {AppRoute} from 'configs/routes';
import {Film} from 'types/film';

type AddReviewScreenProps = {
  film: Film;
}

function AddReviewScreen(props: AddReviewScreenProps): JSX.Element {
  const {film} = props;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film(film.id)} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="temp-link.html" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
}

export default AddReviewScreen;
