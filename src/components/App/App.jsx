import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import css from './App.module.css';
import { Home } from '../../pages/Home/Home';
import { Catalog } from '../../pages/Catalog/Catalog';
import { Details } from '../../pages/Details/Details';
import { NotFound } from '../../pages/NotFound/NotFound';
import { CamperFeatures } from '../CamperFeatures/CamperFeatures';
import { CamperReviews } from '../CamperReviews/CamperReviews';

function App() {
  return (
    <div className={css.contTravel}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Details />}>
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
