import { NavLink, useParams } from 'react-router-dom';
import css from './Camper.module.css';
import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';

export const Camper = ({ id }) => {
  const camper = useSelector(selectCampersById(id));
  console.log(camper.kitchen);
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const firstImage = gallery[0].original;

  return (
    <div className={css.contCamper}>
      <div className={css.backgroundImage} style={{ backgroundImage: `url(${firstImage})` }}></div>
      <div className={css.contInfo}>
        <div className={css.contNamePrice}>
          <h3 className={css.titlePrice}>{name}</h3>
          <div className={css.contPriceFavorites}>
            <p className={css.titlePrice}>€{price}</p>
            <svg className={css.favoritesSvg}>
              <use href="/symbol-defs.svg#icon-Property-1Default"></use>
            </svg>
          </div>
        </div>
        <div className={css.contRevLoc}>
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
        <p className={css.textDescription}>{description}</p>
        <NavLink to={`/catalog/${id}`}>
          <button type="button" className={css.camperBtn}>
            Show more
          </button>
        </NavLink>
      </div>
    </div>
  );
};
