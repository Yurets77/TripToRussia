
import Footer from './Footer';
import Header from './Header';
import AttractionsInvalids from './Invalids/AttractionsInvalids';
import BeginInvalids from './Invalids/BeginInvalids';
import FourBlockInvalids from './Invalids/FourBlockInvalids';
import LineAttractionBetween from './Invalids/LineAttractionBetween';
import LineSpecialInv from './Invalids/LineSpecialInv';
import ReviewsInvalids from './Invalids/ReviewsInvalids';
import ThirdBlockInvalids from './Invalids/ThirdBlockInvalids';
import '/src/blocks/Invalids/invalids.css';

export default function InvalidsPage() {

    return (
       <section>
        <Header/>
        <BeginInvalids/>
        <LineAttractionBetween/>
        <AttractionsInvalids/>
        <ThirdBlockInvalids/>
        <LineSpecialInv/>
        <FourBlockInvalids/>
        <ReviewsInvalids/>
        <Footer/>
       </section>
   )
}