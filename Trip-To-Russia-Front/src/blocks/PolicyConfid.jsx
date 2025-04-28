import Footer from './Footer';
import Header from './Header';
import PolicyConfMain from './PolicyConf/PolicyConfMain';
import '/src/blocks/PolicyConf/policy.css'; 

export default function PolicyConfid() {
    return (
        <section>
            <Header/>
            <PolicyConfMain/>
            <Footer/>
        </section>
    )
}