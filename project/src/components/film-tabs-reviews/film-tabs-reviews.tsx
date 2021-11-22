import {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch} from 'react-redux';
import FilmComment from 'components/film-comment/film-comment';
import {divideArrayInHalf} from 'utils/comment';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {ThunkAppDispatch} from 'types/action';
import {fetchFilmCommentsAction} from 'store/api-actions';
import {getFilmComments} from 'store/current-film/selectors';

interface FilmTabsReviewsProps {
  title: string;
}

function FilmTabsReviews({title}: FilmTabsReviewsProps): JSX.Element {
  const filmComments = useTypedSelector(getFilmComments);
  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();

  useEffect(() => {
    (dispatch as ThunkAppDispatch)(fetchFilmCommentsAction(+id));
  }, [dispatch, id]);

  const comments = filmComments?.map((comment) => <FilmComment key={comment.id} comment={comment} />);
  const [firstHalfComments, secondHalfComments] = divideArrayInHalf(comments);

  return (
    <div className="film-card__reviews film-card__row" data-title={title}>
      <div className="film-card__reviews-col">{firstHalfComments}</div>
      <div className="film-card__reviews-col">{secondHalfComments}</div>
    </div>
  );
}

export default FilmTabsReviews;
