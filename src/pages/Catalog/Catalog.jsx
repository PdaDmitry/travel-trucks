import { useDispatch, useSelector } from 'react-redux';
import css from './Catalog.module.css';
import { useEffect, useRef, useState } from 'react';
import { fetchCampersThunc } from '../../redux/catalog/operations';
import { CampersList } from '../../components/СampersList/CampersList';
import { selectMaxPage, selectTotal } from '../../redux/catalog/selectors';

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [location, setLocation] = useState('');

  const [AC, setAC] = useState(false);
  const [transmission, setTransmission] = useState('');
  const [kitchen, setKitchen] = useState(false);
  const [TV, setTV] = useState(false);
  const [bathroom, setBathroom] = useState(false);

  const [form, setForm] = useState('');

  const maxPage = useSelector(selectMaxPage);
  const total = useSelector(selectTotal);
  console.log('Total ', total);
  //We use the ref to clear the fields after the request
  const locationRef = useRef(null);
  const checkboxesRef = useRef([]);
  const radioRefs = useRef([]);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setLocation(e.target.value);
  };

  const handleCheckboxChange = name => {
    if (name === 'ac') {
      setAC(true);
    } else if (name === 'transmission') {
      setTransmission('automatic');
    } else if (name === 'kitchen') {
      setKitchen(true);
    } else if (name === 'TV') {
      setTV(true);
    } else if (name === 'bathroom') {
      setBathroom(true);
    }
  };

  const handleRadioChange = e => {
    setForm(e.target.value);
  };

  useEffect(() => {
    if (page >= maxPage) {
      setLoadMore(false);
      console.log('page = ', page);
    } else {
      setLoadMore(true);
    }
  }, [page, maxPage]);

  const handleLoadMore = () => {
    if (page < maxPage) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleSearch = () => {
    setPage(1);
    const query = {
      location,
      AC,
      transmission,
      kitchen,
      TV,
      bathroom,
      form,
    };

    //We filter the parameters, leaving only those that are true
    for (let key in query) {
      if (!query[key]) delete query[key];
    }

    dispatch(fetchCampersThunc(query));
    setLocation('');
    setAC(false);
    setTransmission('');
    setKitchen(false);
    setTV(false);
    setBathroom(false);
    setForm('');

    if (locationRef.current) locationRef.current.value = '';
    checkboxesRef.current.forEach(checkbox => (checkbox.checked = false));
    radioRefs.current.forEach(radio => {
      if (radio) radio.checked = false;
    });
    // radioRefs.current.forEach(radio => (radio.checked = false));

    console.log('query ', query);
  };

  useEffect(() => {
    dispatch(fetchCampersThunc());
  }, [dispatch]);

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
                ref={locationRef}
              ></input>
              {/* <svg className={css.mapSvg}>
                <use href="/symbol-defs.svg#icon-Vector-6"></use>
              </svg> */}
              <svg className={css.mapSvg}>
                <use
                  href={location ? '/symbol-defs.svg#icon-Map' : '/symbol-defs.svg#icon-Vector-6'}
                ></use>
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
                  <input
                    type="checkbox"
                    className={css.checkboxInput}
                    name="ac"
                    onChange={() => handleCheckboxChange('ac')}
                    ref={el => (checkboxesRef.current[0] = el)}
                  />
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
                  <input
                    type="checkbox"
                    className={css.checkboxInput}
                    name="transmission"
                    onChange={() => handleCheckboxChange('transmission')}
                    ref={el => (checkboxesRef.current[1] = el)}
                  />
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
                  <input
                    type="checkbox"
                    className={css.checkboxInput}
                    name="kitchen"
                    onChange={() => handleCheckboxChange('kitchen')}
                    ref={el => (checkboxesRef.current[2] = el)}
                  />
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
                  <input
                    type="checkbox"
                    className={css.checkboxInput}
                    name="TV"
                    onChange={() => handleCheckboxChange('TV')}
                    ref={el => (checkboxesRef.current[3] = el)}
                  />
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
                  <input
                    type="checkbox"
                    className={css.checkboxInput}
                    name="bathroom"
                    onChange={() => handleCheckboxChange('bathroom')}
                    ref={el => (checkboxesRef.current[4] = el)}
                  />
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
                    name="vehicleType"
                    value="panelTruck"
                    onChange={handleRadioChange}
                    ref={el => (radioRefs.current[0] = el)}
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
                    name="vehicleType"
                    value="fullyIntegrated"
                    onChange={handleRadioChange}
                    ref={el => (radioRefs.current[1] = el)}
                  />
                  <div className={`${css.contSvgEquipment} ${css.fullyIntegrated}`}>
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
                    name="vehicleType"
                    value="alcove"
                    onChange={handleRadioChange}
                    ref={el => (radioRefs.current[2] = el)}
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
