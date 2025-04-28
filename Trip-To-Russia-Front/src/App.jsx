import './App.css'
import './blocks/bootstrap/css/bootstrap.min.css'
import MainPage from "./blocks/Index.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegionPage from "./blocks/RegionPage.jsx";
import CityCountry from './blocks/CityCountry.jsx';
import Registration from "./blocks/Registration.jsx";
import Login from "./blocks/Login.jsx";
import AccountPage from "./blocks/AccountPage.jsx";
import Algo from './blocks/Algo.jsx';
import CityPlace from "./blocks/CityPlace.jsx";
import WelcomePage from "./blocks/WelcomePage.jsx";
import InvalidsPage from "./blocks/InvalidsPage.jsx";
import WelcomeForInv from './blocks/WelcomeForInv.jsx';
import TeamDuo from './blocks/TeamDuo.jsx';
import ServicesCollab from './blocks/ServicesCollab.jsx'
import PurchasesBasket from './blocks/PurchasesBasket.jsx';
import PolicyConfid from './blocks/PolicyConfid.jsx';
import UserPolicy from './blocks/UserPolicy.jsx';
import NotFound from "./blocks/NotFound.jsx";

function App() {
    const basename = '/';
    const api_regex = /^\/api\/.*/
    if (api_regex.test(window.location.pathname)) {
        return <div />
    }

    return (
        <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="index" element={<MainPage />} />
                    <Route path="moscow" element={<RegionPage />} />
                    <Route path="dagestan" element={<RegionPage />} />
                    <Route path="mahachkala" element={<CityCountry/>} />
                    <Route path="buinaksk" element={<CityCountry/>} />
                    <Route path="derbent" element={<CityCountry/>} />
                    <Route path="kaspuisk" element={<CityCountry/>} />
                    <Route path="xasavurt" element={<CityCountry/>} />
                    <Route path="kazan" element={<CityCountry/>} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="login" element={<Login />} />
                    <Route path='account/*' element={<AccountPage/>}/>
                    <Route path='VDNH' element={<CityPlace/>}/>
                    <Route path='lenin' element={<CityPlace/>}/>
                    <Route path='musei-mos' element={<CityPlace/>}/>
                    <Route path='park-popedi' element={<CityPlace/>}/>
                    <Route path="algo" element={<Algo/>} />
                    <Route path="/" element={<WelcomePage/>} />
                    <Route path="invalids" element={<InvalidsPage/>} />
                    <Route path="welcomeall" element={<WelcomeForInv/>} />
                    <Route path="teamsite" element={<TeamDuo/>} />
                    <Route path="collaboration" element={<ServicesCollab/>} />
                    <Route path="basket" element={<PurchasesBasket/>} />
                    <Route path="Policy" element={<PolicyConfid/>} />
                    <Route path="UserPolicy" element={<UserPolicy/>} />
                    <Route path="*" element={<NotFound/>}/>
                    </Routes>
        </BrowserRouter>
    );
}
export default App