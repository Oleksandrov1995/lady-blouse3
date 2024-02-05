import { AboutProduct } from './AboutProduct/AboutProduct';
import './App.css';
import { useState } from 'react';


import { Contacts } from './Contacts/Contacts';
import { Feadback } from './Feadback/Feadback';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { OurBenefits } from './OurBenefits/OurBenefits';
// import { ProductSize } from "./ProductSize/ProductSize";
import { Proposal } from './Proposal/Proposal';
import { Questions } from './Questions/Questions';
import { Reviews } from './Reviews/Reviews';
// import { ShoppingList } from './ShoppingList/ShoppingList';
// import { ShoppingListButton } from './ShoppingListButton/ShoppingListButton';
import { ChooseType } from './ChooseType/ChooseType';
import { ProductCard } from './ProductCard/ProductCard';

export const App = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };
  // const handleModalClose = () => {
  //   setModalOpen(false);
  // };
  
  const [productCardModalOpen, setProductCardModalOpen] = useState(false);
  const handleProductCardModalOpen = () => {
    setProductCardModalOpen(true);
  };
  const handleProductCardModalClose = () => {
    setProductCardModalOpen(false);
  };
  const [selectedProductId, setSelectedProductId] = useState('');
  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };
  return (
    <>
      <div className="container">
        <ProductCard productCardModalOpen={productCardModalOpen}
         productCardModalClose={handleProductCardModalClose}
         productId={selectedProductId} />
        {/* <ShoppingList modalOpen={modalOpen} modalClose={handleModalClose} />
    <ShoppingListButton modalOpen={handleModalOpen}/> */}
        <Header />
        <Main />
        <Proposal />
        <AboutProduct />
        {/* <ProductSize/> */}
        {/* <ChooseColor id="chooseColor" modalOpen={handleModalOpen}/> */}
        <ChooseType productCardModalOpen={handleProductCardModalOpen}
        onProductSelect={handleProductSelect}/>
        <Reviews />
        <OurBenefits />
        <Questions />
        <Feadback />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};
