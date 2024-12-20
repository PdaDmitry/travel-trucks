import { NavLink } from 'react-router-dom';
import css from './Camper.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampersById, selectFavorites } from '../../redux/catalog/selectors';
import { fetchCampersFavoriteById } from '../../redux/catalog/operations';
import { useState } from 'react';

export const Camper = ({ id }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorite = localStorage.getItem(`favorite-${id}`);
    return savedFavorite === 'true';
  });
  const camper = useSelector(selectCampersById(id));

  const favorites = useSelector(selectFavorites);
  // console.log('favorites ', favorites); // ability to view Favorites in the console!!!!!!
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
    form,
  } = camper;

  const firstImage = gallery[0].original;

  const iconsMap = {
    alcove: 'Vector-14',
    fullyIntegrated: 'Vector-13',
    panelTruck: 'Vector-11',
  };

  // ================Favorites========================
  const handleFavoriteToggle = () => {
    setIsFavorite(prev => {
      const newFavoriteState = !prev;
      localStorage.setItem(`favorite-${id}`, newFavoriteState.toString());
      return newFavoriteState;
    });
    dispatch(fetchCampersFavoriteById(id));
  };
  // =================================================

  return (
    <div className={css.contCamper}>
      <div className={css.backgroundImage} style={{ backgroundImage: `url(${firstImage})` }}></div>
      <div className={css.contInfo}>
        <div className={css.contNamePrice}>
          <h3 className={css.titlePrice}>{name.slice(0, 28)}</h3>
          <div className={css.contPriceFavorites}>
            <p className={css.titlePrice}>€{price}</p>
            <button onClick={handleFavoriteToggle} className={css.btnFavorite}>
              <svg className={css.favoritesSvg}>
                <use
                  href={
                    isFavorite
                      ? '/symbol-defs.svg#icon-Vector-16'
                      : '/symbol-defs.svg#icon-Property-1Default'
                  }
                ></use>
              </svg>
            </button>
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
        <div>
          <ul className={css.contSvgParams}>
            <li className={css.svgParamsElem}>
              <svg className={css.svg} width={20} height={20}>
                <use href="/symbol-defs.svg#icon-Vector-12"></use>
              </svg>
              <p>{transmission.charAt(0).toUpperCase() + transmission.slice(1)}</p>
            </li>
            <li className={css.svgParamsElem}>
              <svg className={css.svg} width={20} height={20}>
                <use href="/symbol-defs.svg#icon-fuel-pump"></use>
              </svg>
              <p>{engine.charAt(0).toUpperCase() + engine.slice(1)}</p>
            </li>
            <li className={css.svgParamsElem}>
              <svg className={css.svg} width={20} height={20}>
                <use href={`/symbol-defs.svg#icon-${iconsMap[form]}`}></use>
              </svg>
              <p>{form.charAt(0).toUpperCase() + form.slice(1)}</p>
            </li>
          </ul>
          <div className={css.svgParamsLast}>
            <svg className={css.svg} width={20} height={20}>
              <use href="/symbol-defs.svg#icon-Vector-10"></use>
            </svg>
            {AC && <p>AC</p>}
          </div>
        </div>
        <NavLink to={`/catalog/${id}`}>
          <button type="button" className={css.camperBtn}>
            Show more
          </button>
        </NavLink>
      </div>
    </div>
  );
};
