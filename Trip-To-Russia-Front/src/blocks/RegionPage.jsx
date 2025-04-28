import RegionPicture from "./RegionPage/RegionPicture.jsx";
import RegionBest from "./RegionPage/RegionBest.jsx";
import RegionResend from "./RegionPage/RegionResend.jsx";
import RegionUnic from "./RegionPage/RegionUnic.jsx";
import RegionEvent from "./RegionPage/RegionEvent.jsx";
import RegionInfo from "./RegionPage/RegionInfo.jsx";
import RegionResend2 from "./RegionPage/RegionResend2.jsx";
import {useEffect, useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AttractionsRegion from "./RegionPage/AttractionsRegion.jsx";




export default function RegionPage(){
    const [region, setRegion] = useState(window.location.pathname)
    const [data, setData] = useState();
    useEffect(() => {
        setRegion(window.location.pathname)
        fetch(`http://localhost:5000/api/region${region}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData((data))
            })
    }, [region]);

    if(data === undefined){
        return null;

    }

    return (
            <section>
                <Header/>
                <RegionPicture info={data}/>
                <RegionInfo info={data}/>
                <AttractionsRegion info={data}/>
                <RegionBest info={data}/>
                <RegionResend info={data}/>
                <RegionUnic info={data}/>
                <RegionResend2 info={data}/>
                <RegionEvent info={data}/>
                <Footer/>
            </section>            
        )







}