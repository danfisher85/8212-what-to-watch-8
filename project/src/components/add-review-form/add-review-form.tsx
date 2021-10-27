import {useState, ChangeEvent, FormEvent, Fragment, useCallback} from 'react';

const COMMENT_PLACEHOLDER = 'Enter Your Review...';
const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

interface AddReviewFormProps {
  initial?: {rating: number; comment: string};
  handleSubmit: (comment: string, currentRating: number) => void;
  placeholder?: string;
}

function AddReviewForm(props: AddReviewFormProps): JSX.Element {
  const {initial = {rating: 0, comment: ''}, handleSubmit, placeholder = COMMENT_PLACEHOLDER} = props;

  const [currentRating, setCurrentRating] = useState<number>(initial.rating);
  const [comment, setComment] = useState<string>(initial.comment);

  const handleCommentChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  }, []);

  const handleRatingChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentRating(+evt.target.value);
  }, []);

  const handleSubmitChange = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      handleSubmit(comment, currentRating);
      setCurrentRating(0);
      setComment('');
    },
    [handleSubmit, comment, currentRating],
  );

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmitChange}>
        <div className="rating">
          <div className="rating__stars">
            {ratings?.map((rating) => {
              const inputID = `star-${rating}`;
              const checked = rating === currentRating;

              return (
                <Fragment key={inputID}>
                  <input
                    className="rating__input"
                    id={inputID}
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={checked}
                    onChange={handleRatingChange}
                  />
                  <label className="rating__label" htmlFor={inputID}>
                    Rating {rating}
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
            placeholder={placeholder}
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
