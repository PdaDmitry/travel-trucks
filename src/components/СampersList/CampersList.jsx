import { useSelector } from 'react-redux';
import { selectCampers, selectPerPage } from '../../redux/catalog/selectors';
import { Camper } from '../Camper/Camper';

import css from './CampersList.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export const CampersList = ({ page }) => {
  const campers = useSelector(selectCampers);
  const perPage = useSelector(selectPerPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  // useEffect(() => {
  //   if (campers.length === 0) {
  //     toast.error('No results were found for your request', {
  //       duration: 4000,
  //       position: 'bottom-center',
  //       style: {
  //         background: 'orange',
  //         color: 'black',
  //       },
  //     });
  //   }
  // }, [campers]);

  return (
    <div>
      <ul className={css.contList}>
        {campers.slice(startIndex, endIndex).map(camper => (
          <li key={camper.id} className={css.listElem}>
            <Camper id={camper.id} />
          </li>
        ))}
      </ul>
      <Toaster />
    </div>
  );
};
