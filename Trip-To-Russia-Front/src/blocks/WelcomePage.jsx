import LayersOne from './Welcome/LayersOne';
// import LayersThree from './Welcome/LayersThree';
// import LayersTwo from './Welcome/LayersTwo';
import Logo from './Welcome/Logo';
import '/src/blocks/Welcome/Welcome.css';

export default function WelcomePage() {

    return (
       <section>
        <Logo/>
        <LayersOne/>
       </section>
   )
}