import {getFormattedDateTime, getHumanizedDate} from 'utils/date';
import {Comment} from 'types/comment';

interface FilmCommentProps {
  comment: Comment;
}

function FilmComment({comment}: FilmCommentProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={getFormattedDateTime(comment.date)}>
            {getHumanizedDate(comment.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default FilmComment;
