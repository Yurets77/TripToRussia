import slides from '/public/Photo/attractionsCity/attractionsCity.json'
import Video from "./Index/Video.jsx";
import Attractions from "./Index/Attractions.jsx";
import Resend from "./Index/algoResend.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";



export default function MainPage() {

    return (
       <section>
           <Header/>
            <Video/>
            <Attractions slides={slides}/>
            <Resend/>
           <Footer/>
       </section>
   )
}