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
      <div>
        <div></div>
      </div>
      <CamperBookingForm />
    </div>
  );
};
