import { useParams } from 'react-router-dom';
import { CamperBookingForm } from '../CamperBookingForm/CamperBookingForm';
import css from './CamperFeatures.module.css';
import { selectCampersById } from '../../redux/catalog/selectors';
import { useSelector } from 'react-redux';
import { FeaturesSvgParams } from '../FeaturesSvgParams/FeaturesSvgParams';

export const CamperFeatures = () => {
  const { id } = useParams();
  const { form, length, width, height, tank, consumption, transmission, engine, AC } = useSelector(
    selectCampersById(id)
  );

  const iconsMap = {
    alcove: 'Vector-14',
    fullyIntegrated: 'Vector-13',
    panelTruck: 'Vector-11',
  };

  const formMap = {
    panelTruck: 'Panel truck',
    fullyIntegrated: 'Fully Integrated',
    alcove: 'Alcove',
  };

  return (
    <div className={css.contFeatures}>
      <div>
        <svg className={css.lineSvg}>
          <use href="/symbol-line.svg#icon-Divider"></use>
        </svg>
      </div>
      <div className={css.contInfo}>
        <div className={css.contParams}>
          <div className={css.contDynamicParameters}>
            <ul className={css.contSvgParams}>
              <li className={css.svgParamsElem}>
                <svg className={css.svg} width={20} height={20}>
                  <use href="/symbol-defs.svg#icon-Vector-12"></use>
                </svg>
                <p>{transmission.charAt(0).toUpperCase() + transmission.slice(1)}</p>
              </li>
              <li className={css.svgParamsElem}>
                <svg className={css.svg} width={20} height={20}>
                  <use href="/symbol-defs.svg#icon-Vector-10"></use>
                </svg>
                {AC && <p>AC</p>}
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

            <FeaturesSvgParams />
          </div>

          <p className={css.detailText}>Vehicle details</p>
          <div className={css.grayLine}></div>
          <ul className={css.listParams}>
            <li className={css.detailsText}>
              <p>Form</p>
              <p>{formMap[form]}</p>
            </li>
            <li className={css.detailsText}>
              <p>Length</p>
              <p>{parseFloat(length)} m</p>
            </li>
            <li className={css.detailsText}>
              <p> Width</p>
              <p>{parseFloat(width)} m</p>
            </li>
            <li className={css.detailsText}>
              <p>Height</p>
              <p>{parseFloat(height)} m</p>
            </li>
            <li className={css.detailsText}>
              <p>Tank</p>
              <p>{parseFloat(tank)} I</p>
            </li>
            <li className={css.detailsText}>
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
