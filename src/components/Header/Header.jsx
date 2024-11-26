import { NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={css.contRout}>
      <div className={css.logo} onClick={handleLogoClick}>
        <svg className={css.logoSvg}>
          <use href="/symbol-defs.svg#icon-Logo"></use>
        </svg>
      </div>
      <nav>
        <ul className={css.contUl}>
          <li className={css.contLi}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li className={css.contLi}>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
