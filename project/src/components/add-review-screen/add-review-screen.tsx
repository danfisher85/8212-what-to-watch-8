import {Link, Redirect, useParams, generatePath} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import Logo from 'components/logo/logo';
import UserBlock from 'components/user-block/user-block';
import AddReviewForm from 'components/add-review-form/add-review-form';
import LoadingScreen from 'components/loading-screen/loading-screen';
import {AuthorizationStatus} from 'configs/auth-status';
import {AppRoute} from 'configs/routes';
import {ThunkAppDispatch} from 'types/action';
import {fetchCurrentFilmAction} from 'store/api-actions';
import {getCurrentFilm} from 'store/current-film/selectors';
import {getAuthorizationStatus} from 'store/user-authorization/selectors';
import {postFilmComment} from 'store/api-actions';
import {CommmentPost} from 'types/comment';

enum InitialValue {
  Rating = 0,
}
const INITIAL_COMMENT = '';

function AddReviewScreen(): JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkAppDispatch)(fetchCurrentFilmAction(id));
  }, [dispatch, id]);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Redirect to={AppRoute.SignIn} />;
  }

  if (currentFilm === null) {
    return <LoadingScreen />;
  }

  const pathToFilm = generatePath(AppRoute.Film, {
    id: currentFilm.id,
  });

  const handleSubmit = (filmId: string, {rating, comment}: CommmentPost) => {
    dispatch(postFilmComment(filmId, {comment, rating}));
  };

  return (
    <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={pathToFilm} className="breadcrumbs__link">
                  {currentFilm.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm initial={{rating: InitialValue.Rating, comment: INITIAL_COMMENT}} handleSubmit={handleSubmit} />
    </section>
  );
}

export default AddReviewScreen;
