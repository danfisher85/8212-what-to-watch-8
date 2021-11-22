import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState, ChangeEvent, FormEvent, Fragment, useCallback} from 'react';
import {useTypedSelector} from 'hooks/useTypedSelector';
import {checkCommentStatus} from 'utils/comment';
import {postFilmComment} from 'store/api-actions';
import {getIsCommentPosting} from 'store/current-film/selectors';

const COMMENT_PLACEHOLDER = 'Enter Your Review...';
const COMMENT_MINLENGTH = 50;
const COMMENT_MAXLENGTH = 400;
const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

interface AddReviewFormProps {
  initial?: {rating: number; comment: string};
  placeholder?: string;
}

function AddReviewForm(props: AddReviewFormProps): JSX.Element {
  const {initial = {rating: 0, comment: ''}, placeholder = COMMENT_PLACEHOLDER} = props;
  const isCommentPosting = useTypedSelector(getIsCommentPosting);
  const {id} = useParams<{id: string}>();

  const dispatch = useDispatch();

  const [rating, setRating] = useState<number>(initial.rating);
  const [isCurrentRatingActive, setIsCurrentRatingActive] = useState<boolean>(false);
  const [comment, setComment] = useState<string>(initial.comment);
  const [isCommentActive, setIsCommentActive] = useState<boolean>(false);

  const isSubmitButtonDisabled = !isCommentActive || !isCurrentRatingActive || isCommentPosting;

  const handleCommentChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    const commentValue = evt.target.value;
    setIsCommentActive(checkCommentStatus(commentValue, COMMENT_MINLENGTH, COMMENT_MAXLENGTH));
    setComment(commentValue);
  }, []);

  const handleRatingChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setIsCurrentRatingActive(Boolean(evt.target.value));
    setRating(+evt.target.value);
  }, []);

  const handleSubmitChange = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      dispatch(postFilmComment(id, {rating, comment}));
      setRating(0);
      setComment('');
    },
    [comment, rating, dispatch, id],
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmitChange}>
        <fieldset className="add-review__fieldset" disabled={isCommentPosting}>
          <div className="rating">
            <div className="rating__stars">
              {ratings?.map((ratingStar) => {
                const inputID = `star-${ratingStar}`;
                const checked = ratingStar === rating;
                return (
                  <Fragment key={inputID}>
                    <input
                      className="rating__input"
                      id={inputID}
                      type="radio"
                      name="rating"
                      value={ratingStar}
                      checked={checked}
                      onChange={handleRatingChange}
                    />
                    <label className="rating__label" htmlFor={inputID}>
                      Rating {ratingStar}
                    </label>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              minLength={COMMENT_MINLENGTH}
              maxLength={COMMENT_MAXLENGTH}
              placeholder={placeholder}
              value={comment}
              onChange={handleCommentChange}
              disabled={isCommentPosting}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}>
                Post
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default AddReviewForm;
