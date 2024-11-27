import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';
import css from './Details.module.css';
import { CamperBookingForm } from '../../components/CamperBookingForm/CamperBookingForm';

export const Details = () => {
  const { id } = useParams();
  const camper = useSelector(selectCampersById(id));

  if (!camper) {
    return <p>Camper not found.</p>;
  }

  return (
    <div>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      <p>Price: {camper.price}</p>
      <p>Rating: {camper.rating}</p>
      <p>Location: {camper.location}</p>
      <div>
        {camper.gallery.map((image, index) => (
          <img key={index} src={image.original} alt={`Camper image ${index + 1}`} />
        ))}
      </div>
      <ul className={css.contTextLink}>
        <li>
          <NavLink to="features" className={css.featuresReviewsClass}>
            <p>Features</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.featuresReviewsClass}>
            <p>Reviews</p>
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <CamperBookingForm />
    </div>
  );
};
