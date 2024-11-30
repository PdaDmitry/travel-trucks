import { useSelector } from 'react-redux';
import { selectCampers, selectPerPage } from '../../redux/catalog/selectors';
import { Camper } from '../Camper/Camper';

import css from './CampersList.module.css';

export const CampersList = ({ page }) => {
  const campers = useSelector(selectCampers);
  const perPage = useSelector(selectPerPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return (
    <ul className={css.contList}>
      {campers.slice(startIndex, endIndex).map(camper => (
        <li key={camper.id}>
          <Camper id={camper.id} />
        </li>
      ))}
    </ul>
  );
};
