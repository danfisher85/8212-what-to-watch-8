import {Link, Redirect, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import AddReviewForm from 'components/add-review-form/add-review-form';
import LoadingScreen from 'components/loading-screen/loading-screen';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {AuthorizationStatus} from 'configs/auth-status';
import {AppRoute} from 'configs/routes';
import {ThunkAppDispatch} from 'types/action';
import {fetchCurrentFilmAction} from 'store/api-actions';

enum InitialValue {
  Rating = 0,
}
const INITIAL_COMMENT = '';

function AddReviewScreen(): JSX.Element {
  const {currentFilm: film} = useTypedSelector((state) => state.CURRENT);
  const {authorizationStatus} = useTypedSelector((state) => state.USER);

  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkAppDispatch)(fetchCurrentFilmAction(+id));
  }, [dispatch, id]);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.SignIn} />;
  }

  if (film === null) {
    return <LoadingScreen />;
  }

  return (
    <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
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
                <span className="breadcrumbs__link">
                  Add review
                </span>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm initial={{rating: InitialValue.Rating, comment: INITIAL_COMMENT}} />
    </section>
  );
}

export default AddReviewScreen;
