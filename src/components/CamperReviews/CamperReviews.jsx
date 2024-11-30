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
                  <div className={css.contNameSvg}>
                    <div className={css.avatar}>{review.reviewer_name[0]}</div>
                    <div>
                      <h4 className={css.name}>{review.reviewer_name}</h4>
                      <div className={css.rating}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg key={i} className={css.star}>
                            <use
                              href={
                                i < review.reviewer_rating
                                  ? '/symbol-defs.svg#icon-Property-1Pressed' // Yellow star icon
                                  : '/symbol-defs.svg#icon-Rating' // Gray star icon
                              }
                            ></use>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={css.textReview}>{review.comment}</p>
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
