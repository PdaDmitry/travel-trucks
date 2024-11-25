import { useNavigate } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog'); // Go to the Catalog page
  };

  return (
    <div className={css.contHome}>
      <div className={css.contInfo}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeText}>You can find everything you want in our catalog</p>
        <button type="button" className={css.homeBtn} onClick={handleButtonClick}>
          View Now
        </button>
      </div>
    </div>
  );
};
