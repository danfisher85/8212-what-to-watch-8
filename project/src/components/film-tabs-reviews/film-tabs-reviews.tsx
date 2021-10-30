import FilmComment from 'components/film-comment/film-comment';
import {divideArrayInHalf} from 'utils/comment';
import {Comments} from 'types/comment';

interface FilmTabsReviewsProps {
  title: string;
  comments: Comments;
}

function FilmTabsReviews({title, comments}: FilmTabsReviewsProps): JSX.Element {
  const filmComments = comments?.map((comment) => <FilmComment key={comment.id} comment={comment} />);
  const [firstHalfComments, secondHalfComments] = divideArrayInHalf(filmComments);

  return (
    <div className="film-card__reviews film-card__row" data-title={title}>
      <div className="film-card__reviews-col">{firstHalfComments}</div>
      <div className="film-card__reviews-col">{secondHalfComments}</div>
    </div>
  );
}

export default FilmTabsReviews;
