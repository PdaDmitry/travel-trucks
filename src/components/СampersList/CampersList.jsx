import { useSelector } from 'react-redux';
import {
  selectCampers,
  selectFetched,
  selectIsLoading,
  selectPerPage,
} from '../../redux/catalog/selectors';
import { Camper } from '../Camper/Camper';

import css from './CampersList.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
// import Loader from '../Loader/Loader';

export const CampersList = ({ page }) => {
  const loading = useSelector(selectIsLoading);
  const campers = useSelector(selectCampers);
  const perPage = useSelector(selectPerPage);

  // const fetch = useSelector(selectFetched);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  // useEffect(() => {
  //   console.log(
  //     'before  if',
  //     'loafimg: ',
  //     loading,
  //     'campers.length ',
  //     campers.length,
  //     'fetch ',
  //     fetch
  //   );

  //   if (campers.length === 0 && !loading && fetch) {
  //     console.log(
  //       'inside if',
  //       'loafimg: ',
  //       loading,
  //       'campers.length ',
  //       campers.length,
  //       'fetch ',
  //       fetch
  //     );

  //     toast.error('No results were found for your request', {
  //       duration: 4000,
  //       position: 'bottom-center',
  //       style: {
  //         background: 'orange',
  //         color: 'black',
  //       },
  //     });
  //   }
  // }, [campers, loading, fetch]);

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
