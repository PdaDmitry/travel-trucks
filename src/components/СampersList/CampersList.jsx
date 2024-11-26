import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/catalog/selectors';
import { Camper } from '../Camper/Camper';

export const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map(camper => (
        <li key={camper.id}>
          <Camper data={camper} />
        </li>
      ))}
    </ul>
  );
};
