import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectMaxPage,
  selectPerPage,
  selectTotal,
} from '../../redux/catalog/selectors';
import { Camper } from '../Camper/Camper';

export const CampersList = ({ page }) => {
  const campers = useSelector(selectCampers);
  const totalItems = useSelector(selectTotal);
  const perPage = useSelector(selectPerPage);
  const maxPage = useSelector(selectMaxPage);
  console.log(page);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return (
    <ul>
      {campers.slice(startIndex, endIndex).map(camper => (
        <li key={camper.id}>
          <Camper data={camper} />
        </li>
      ))}
    </ul>
  );
};
