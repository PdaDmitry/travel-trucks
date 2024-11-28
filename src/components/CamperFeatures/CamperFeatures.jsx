import { useParams } from 'react-router-dom';
import { CamperBookingForm } from '../CamperBookingForm/CamperBookingForm';
import css from './CamperFeatures.module.css';
import { selectCampersById } from '../../redux/catalog/selectors';
import { useSelector } from 'react-redux';

export const CamperFeatures = () => {
  const { id } = useParams();
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
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
  } = useSelector(selectCampersById(id));
  const elemParams = [];

  const camperForm =
    form === 'panelTruck' ? 'Panel truck' : form === 'fullyIntegrated' ? 'Fully Integrated' : form;

  return (
    <div className={css.contFeatures}>
      <div>
        <svg className={css.lineSvg}>
          <use href="/symbol-line.svg#icon-Divider"></use>
        </svg>
      </div>
      <div className={css.contInfo}>
        <div className={css.contParams}>
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
          </ul>
          <p className={css.detailText}>Vehicle details</p>
          <div className={css.grayLine}></div>
          <ul className={css.listParams}>
            <li>
              <p>Form</p>
              <p>{camperForm}</p>
            </li>
            <li>
              <p>Length</p>
              <p>{length}</p>
            </li>
            <li>
              <p> Width</p>
              <p>{width}</p>
            </li>
            <li>
              <p>Height</p>
              <p>{height}</p>
            </li>
            <li>
              <p>Tank</p>
              <p>{tank}</p>
            </li>
            <li>
              <p>Consumption</p>
              <p>{consumption}</p>
            </li>
          </ul>
        </div>
        <CamperBookingForm />
      </div>
    </div>
  );
};
