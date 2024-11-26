import css from './Camper.module.css';

export const Camper = ({ data: { id, name, price, rating, location, description, gallery } }) => {
  const firstImage = gallery[0].original;

  return (
    <div className={css.contCamper}>
      <div className={css.backgroundImage} style={{ backgroundImage: `url(${firstImage})` }}></div>
      <div className={css.contInfo}>
        <div className={css.contNamePrice}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <div className={css.contRevLoc}>
          <p>{rating}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
