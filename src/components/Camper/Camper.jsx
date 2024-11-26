import css from './Camper.module.css';

export const Camper = ({ data: { id, name, price, rating, location, description, gallery } }) => {
  const firstImage = gallery[0].original;

  return (
    <div className={css.contCamper}>
      <div className={css.backgroundImage} style={{ backgroundImage: `url(${firstImage})` }}></div>
      <ul>
        {/* <li>{id}</li> */}
        <li>{name}</li>
        <li>{price}</li>
        <li>{rating}</li>
        <li>{location}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};
