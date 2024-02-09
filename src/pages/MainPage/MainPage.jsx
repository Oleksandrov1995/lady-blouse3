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

export const MainPage = () =>{
    return(
        <div>
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