import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCampersById } from '../../redux/catalog/selectors';
import css from './FeaturesSvgParams.module.css';

export const FeaturesSvgParams = () => {
  const { id } = useParams();
  const camperParams = useSelector(selectCampersById(id));
  const { bathroom, kitchen, TV, radio, refrigerator, gas, water } = camperParams;
  const dynamicParameters = { bathroom, kitchen, TV, radio, refrigerator, gas, water };

  // Icons for each parameter
  const iconMap = {
    bathroom: '/symbol-defs.svg#icon-Vector-8',
    kitchen: '/symbol-defs.svg#icon-Group-6',
    TV: '/symbol-defs.svg#icon-Vector-7',
    radio: '/symbol-defs.svg#icon-Vector-1',
    refrigerator: '/symbol-defs.svg#icon-Vector-9',
    microwave: '/symbol-defs.svg#icon-Group-4',
    // gas: '/symbol-defs.svg#icon-Group-5',
    water: '/symbol-defs.svg#icon-Vector-15',
  };

  // We select only those parameters that are set to true.
  const activeFeatures = Object.entries(iconMap).filter(([key]) => dynamicParameters[key]);

  return (
    <ul className={css.contIconParams}>
      {activeFeatures.map(([key, icon]) => (
        <li className={css.iconParamsElem} key={key}>
          <svg className={css.svgIcon} width={20} height={20}>
            <use href={icon}></use>
          </svg>
          <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
        </li>
      ))}
    </ul>
  );
};
