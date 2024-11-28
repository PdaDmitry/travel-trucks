import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';
import css from './Details.module.css';
// import { CamperBookingForm } from '../../components/CamperBookingForm/CamperBookingForm';

export const Details = () => {
  const { id } = useParams();
  // const camper = useSelector(selectCampersById(id));
  const { name, description, price, rating, location, gallery, reviews } = useSelector(
    selectCampersById(id)
  );

  if (!id) {
    return <p>Camper not found.</p>;
  }

  return (
    <div className={css.contDetails}>
      <h3 className={css.detailTitle}>{name}</h3>
      <div className={css.ratingReviewsLocation}>
        <p className={css.text}>
          <svg className={css.ratingStar}>
            <use href="/symbol-defs.svg#icon-Property-1Pressed"></use>
          </svg>
          {rating}({reviews.length} Reviews)
        </p>
        <p className={css.textLocation}>
          <svg className={css.locationSvg}>
            <use href="/symbol-defs.svg#icon-Map"></use>
          </svg>
          {location.split(', ').reverse().join(', ')}
        </p>
      </div>
      <p className={css.price}>€{price}</p>
      <div className={css.contImg}>
        {gallery.map((image, index) => (
          <div
            key={index}
            className={css.photoElements}
            style={{
              backgroundImage: `url(${image.original})`,
            }}
            aria-label={`Camper image ${index + 1}`} //alt
          />
        ))}
      </div>
      <p className={css.textDescr}>{description}</p>
      <ul className={css.contTextLink}>
        <li className={css.navPage}>
          <NavLink to="features" className={css.featuresReviewsClass}>
            <p className={css.page}>Features</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.featuresReviewsClass}>
            <p className={css.page}>Reviews</p>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
