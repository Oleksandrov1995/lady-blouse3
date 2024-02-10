import { Products } from 'pages/Products/Products';
import { MainPage } from '../pages/MainPage/MainPage';
import './App.css';


import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<Products />} />
        </Routes>
      </div>
    
    </>
  );
};
