import '/src/blocks/Algorithm/algorithm.css';
import AlgorithmTravel from './Algorithm/MAINFILE_ALGO/AlgorithmTravel';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PeredAlgo from './Algorithm/MAINFILE_ALGO/PeredAlgo.jsx';


export default function Algo() {
    return (
        <section>
            <Header/>
            <PeredAlgo/>
            <AlgorithmTravel/>
            <Footer/>
        </section>
    )

}
