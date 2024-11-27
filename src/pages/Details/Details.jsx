import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCampersById } from '../../redux/catalog/selectors';

export const Details = () => {
  const { id } = useParams();
  const camper = useSelector(selectCampersById(id));

  if (!camper) {
    return <p>Camper not found.</p>;
  }

  return (
    <div>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      <p>Price: {camper.price}</p>
      <p>Rating: {camper.rating}</p>
      <p>Location: {camper.location}</p>
      <div>
        <img src={camper.gallery[0].original} alt={camper.name} />
      </div>
    </div>
  );
};
