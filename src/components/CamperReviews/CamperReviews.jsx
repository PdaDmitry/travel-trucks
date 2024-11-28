import { useParams } from 'react-router-dom';
import { CamperBookingForm } from '../CamperBookingForm/CamperBookingForm';
import css from './CamperReviews.module.css';
import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';

export const CamperReviews = () => {
  const { id } = useParams();
  const { reviews } = useSelector(selectCampersById(id));

  return (
    <div>
      <div>
        <svg className={css.line}>
          <use href="/symbol-line.svg#icon-Divider-right"></use>
        </svg>
      </div>
      <div className={css.contInfo}>
        <div className={css.contReview}>
          {reviews.length > 0 ? (
            <ul className={css.reviewList}>
              {reviews.map((review, index) => (
                <li key={index} className={css.reviewItem}>
                  <h4>{review.reviewer_name}</h4>
                  <p>Rating: {review.reviewer_rating}/5</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available for this camper.</p>
          )}
        </div>
        <CamperBookingForm />
      </div>
    </div>
  );
};
