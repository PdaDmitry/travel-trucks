import css from './Catalog.module.css';

export const Catalog = () => {
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
        <h3>Vehicle equipment</h3>
      </div>
      <div>
        <h3>Vehicle type</h3>
      </div>
    </section>
  );
};
