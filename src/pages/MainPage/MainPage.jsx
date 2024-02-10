import { AboutProduct } from '../../components/AboutProduct/AboutProduct';
import { Contacts } from '../../components/Contacts/Contacts';
import { Feadback } from '../../components/Feadback/Feadback';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { OurBenefits } from '../../components/OurBenefits/OurBenefits';
import { Proposal } from '../../components/Proposal/Proposal';
import { Questions } from '../../components/Questions/Questions';
import { Reviews } from '../../components/Reviews/Reviews';
import { ChooseType } from '../../components/ChooseType/ChooseType';
import { useState } from 'react';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
import { ShoppingListButton } from 'components/ShoppingListButton/ShoppingListButton';
export const MainPage = () =>{
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => { setModalOpen(true) };
    const handleModalClose = () => { setModalOpen(false) };
    return(
        <div>
            <ShoppingList modalOpen={modalOpen} modalClose={handleModalClose} />
          <ShoppingListButton modalOpen={handleModalOpen} />
        <Header />
        <Main />
        <Proposal />
        <AboutProduct />
        <ChooseType/>
        <Reviews />
        <OurBenefits />
        <Questions />
        <Feadback />
        <Contacts />
        <Footer />
        </div>
    )
}