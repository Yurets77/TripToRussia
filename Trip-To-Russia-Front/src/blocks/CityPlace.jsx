import MainPhoto from "./PlacePage/MainPhoto.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PlaceText from "./PlacePage/PlaceText.jsx";
import MainText from "./PlacePage/MainText.jsx";
import PlaceAddress from "./PlacePage/PlaceAddress.jsx";
import OtherAttractions from "./PlacePage/OtherAttractions.jsx";
import {useEffect, useState} from "react";

export default function CityPlace(){
    const [place, setPlace] = useState(window.location.pathname)
    const [data, setData] = useState();
    useEffect(() => {
        setPlace(window.location.pathname)
        fetch(`http://localhost:5000/api/place${place}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData((data))
            })
    }, [place]);

    if(data === undefined){
        return null;

    }
    return(
        <main>
            <Header/>
            <MainPhoto info={data}/>
            <PlaceText info={data}/>
            <MainText info={data}/>
            <PlaceAddress info={data}/>
            <OtherAttractions info={data}/>
            <Footer/>
        </main>
    )
}