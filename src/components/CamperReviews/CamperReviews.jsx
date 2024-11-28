import { CamperBookingForm } from '../CamperBookingForm/CamperBookingForm';
import css from './CamperReviews.module.css';

export const CamperReviews = () => {
  return (
    <div>
      <div>
        <svg className={css.line}>
          <use href="/symbol-line.svg#icon-Divider-right"></use>
        </svg>
      </div>
      <CamperBookingForm />
    </div>
  );
};
