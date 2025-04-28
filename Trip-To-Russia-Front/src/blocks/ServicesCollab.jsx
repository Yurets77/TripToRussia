import Footer from "./Footer";
import Header from "./Header";
import ServicesFix from "./ServicesCollab/ServicesFix";
import ServicesOneBlock from "./ServicesCollab/ServicesOneBlock";
import ServicesText from "./ServicesCollab/ServicesText";
import '/src/blocks/ServicesCollab/services.css';

export default function ServicesCollab() {
    return (
        <section>
            <Header/>
            <ServicesText/>
            <ServicesOneBlock/>
            <ServicesFix/>
            <Footer/>
        </section>
    )
}