import {useState, ChangeEvent, FormEvent, Fragment} from 'react';
import {Ratings} from 'configs/misc';

const COMMENT_DEFAULT = '';
const COMMENT_PLACEHOLDER = 'Enter Your Review...';
const RATING_DEFAULT = 0;

function AddReviewForm(): JSX.Element {

  const [comment, setComment] = useState(COMMENT_DEFAULT);
  const [rating, setRating] = useState(RATING_DEFAULT);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.currentTarget.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.currentTarget.value));
  };

  const handleSubmitChange = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setRating(RATING_DEFAULT);
    setComment(COMMENT_DEFAULT);
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmitChange}>
        <div className="rating">
          <div className="rating__stars">
            {
              Ratings.map((value) => {
                const inputID = `star-${value}`;
                const checked = value === rating;

                return (
                  <Fragment key={inputID}>
                    <input className="rating__input" id={inputID} type="radio" name="rating" value={value} checked={checked} onChange={handleRatingChange}/>
                    <label className="rating__label" htmlFor={inputID}>Rating {value}</label>
                  </Fragment>
                );
              })
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder={COMMENT_PLACEHOLDER} value={comment} onChange={handleCommentChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
