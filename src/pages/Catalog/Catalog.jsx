import { useDispatch } from 'react-redux';
import css from './Catalog.module.css';
import { useEffect } from 'react';
import { fetchCampersThunc } from '../../redux/catalog/operations';

import { CampersList } from '../../components/СampersList/CampersList';

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersThunc());
  }, [dispatch]);

  return (
    <section className={css.contCatalog}>
      <h2 className={css.visuallyHidden}>Catalog</h2>
      <div className={css.contLocat}>
        <p className={css.textLocat}>Location</p>
        <div className={css.inputWrap}>
          <input className={css.inputLocat} placeholder="City"></input>
          <svg className={css.mapSvg}>
            <use href="/symbol-defs.svg#icon-Vector-6"></use>
          </svg>
        </div>
      </div>
      <div>
        <p>Filters</p>
        <p>Vehicle equipment</p>
      </div>
      <div>
        <p>Vehicle type</p>
      </div>
      <CampersList />
    </section>
  );
};
