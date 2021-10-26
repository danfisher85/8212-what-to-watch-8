import {Link} from 'react-router-dom';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import AddReviewForm from 'components/add-review-form/add-review-form';
import {Film} from 'types/film';

enum InitialValue {
  Rating = 0,
}
const INITIAL_COMMENT = '';

interface AddReviewScreenProps {
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
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="temp-link.html" className="breadcrumbs__link">
                  Add review
                </a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm
        initial={{rating: InitialValue.Rating, comment: INITIAL_COMMENT}}
        handleSubmit={() => {
          throw new Error('Function "handleSubmit" is not implemented.');
        }}
      />
    </section>
  );
}

export default AddReviewScreen;
