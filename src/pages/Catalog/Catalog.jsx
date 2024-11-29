import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';
import { useEffect, useState } from 'react';
import { fetchCampersThunc } from '../../redux/catalog/operations';
import { CampersList } from '../../components/СampersList/CampersList';
import { selectMaxPage } from '../../redux/catalog/selectors';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [location, setLocation] = useState({});

  const maxPage = useSelector(selectMaxPage);
  const dispatch = useDispatch();
  let query = {};
  const handleLoadMore = () => {
    if (page < maxPage) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setLocation(prevLocation => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    query.city = location.city;
  };

  useEffect(() => {
    if (page >= maxPage) {
      setLoadMore(false);
    } else {
      setLoadMore(true);
    }
  }, [page, maxPage]);

  useEffect(() => {
    dispatch(fetchCampersThunc(query));
    setLocation({});
  }, [dispatch, query]);

  return (
    <section className={css.contCatalog}>
      <h2 className={css.visuallyHidden}>Catalog</h2>
      <div className={css.catalog}>
        <div className={css.contFilter}>
          <div className={css.contLocat}>
            <p className={css.textLocat}>Location</p>
            <div className={css.inputWrap}>
              <input
                className={css.inputLocat}
                name="location"
                placeholder="City"
                onChange={handleInputChange}
              ></input>
              <svg className={css.mapSvg}>
                <use href="/symbol-defs.svg#icon-Vector-6"></use>
              </svg>
            </div>
          </div>

          <div className={css.equipmentFilter}>
            <p className={css.textFilter}>Filters</p>
            <p className={css.titleEquipment}>Vehicle equipment</p>
            <svg className={css.svgLineFilter}>
              <use href="/symbol-line-filter.svg#icon-Divider-filter"></use>
            </svg>
            {/* ======================Filter checkboxes======================= */}
            <ul className={css.equipmentList}>
              <li className={css.equipmentItem}>
                <label className={css.equipmentLabel}>
                  <input type="checkbox" className={css.checkboxInput} />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-10"></use>
                    </svg>
                    <p className={css.textEquipment}>AC</p>
                  </div>
                </label>
              </li>
              <li className={css.equipmentItem}>
                <label className={css.equipmentLabel}>
                  <input type="checkbox" className={css.checkboxInput} />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-12"></use>
                    </svg>
                    <p className={css.textEquipment}>Automatic</p>
                  </div>
                </label>
              </li>
              <li className={css.equipmentItem}>
                <label className={css.equipmentLabel}>
                  <input type="checkbox" className={css.checkboxInput} />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Group-6"></use>
                    </svg>
                    <p className={css.textEquipment}>Kitchen</p>
                  </div>
                </label>
              </li>
              <li className={css.equipmentItem}>
                <label className={css.equipmentLabel}>
                  <input type="checkbox" className={css.checkboxInput} />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-7"></use>
                    </svg>
                    <p className={css.textEquipment}>TV</p>
                  </div>
                </label>
              </li>
              <li className={css.equipmentItem}>
                <label className={css.equipmentLabel}>
                  <input type="checkbox" className={css.checkboxInput} />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-8"></use>
                    </svg>
                    <p className={css.textEquipment}>Bathroom</p>
                  </div>
                </label>
              </li>
            </ul>
            {/* ===================================================== */}
          </div>
          <div className={css.contTypeFilter}>
            <div>
              <p className={css.titleEquipment}>Vehicle type</p>
              <svg className={css.svgLineFilter}>
                <use href="/symbol-line-filter.svg#icon-Divider-filter"></use>
              </svg>
            </div>
            {/* =====================Filter radio buttons================================= */}
            <ul className={css.vehicleType}>
              <li>
                <label>
                  <input
                    type="radio"
                    className={css.checkboxInput}
                    name="equipment"
                    value="Alcove"
                  />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-11"></use>
                    </svg>
                    <p className={css.textEquipment}>Van</p>
                  </div>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    className={css.checkboxInput}
                    name="equipment"
                    value="Alcove"
                  />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-13"></use>
                    </svg>
                    <p className={css.textEquipment}>Fully Integrated</p>
                  </div>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    className={css.checkboxInput}
                    name="equipment"
                    value="Alcove"
                  />
                  <div className={css.contSvgEquipment}>
                    <svg className={css.svgEquipment}>
                      <use href="/symbol-defs.svg#icon-Vector-14"></use>
                    </svg>
                    <p className={css.textEquipment}>Alcove</p>
                  </div>
                </label>
              </li>
            </ul>
            {/* ============================================================ */}
          </div>
          <button type="submit" className={css.searchBtn} onClick={handleSearch}>
            Search
          </button>
        </div>

        <div>
          <div className={css.campersList}>
            <CampersList page={page} />
          </div>

          {loadMore && (
            <button className={css.btnLoadMore} type="button" onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
