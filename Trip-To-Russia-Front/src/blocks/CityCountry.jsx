import {useEffect, useState} from "react";
import '/src/blocks/City/City.css';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import CityPhoto from "./City/CityPhoto.jsx";
import CityDescription from "./City/CityDescription.jsx";
import Visit from "./City/Visit.jsx";
import TheBestPlace from "./City/TheBestPlace.jsx";
import Why from "./City/Why.jsx";
import History from "./City/History.jsx";
import Line from "./City/Line.jsx";
import ServicesBlock from "./City/ServicesBlock.jsx";
import Restaurants from "./City/Restaurants.jsx";
import BeginTravel from "./City/BeginTravel.jsx";



export default function CityCountry() {
    const [city, setCity] = useState(window.location.pathname)
    const [data, setData] = useState();
    useEffect(() => {
        setCity(window.location.pathname)
        fetch(`http://localhost:5000/api/city${city}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData((data))
            })
    }, [city]);

    if(data === undefined){
        return null;

    }
        return(
        <section>
            <Header/>
            <CityPhoto info={data}/>
            <CityDescription info={data}/>
            <Visit info={data}/>
            <TheBestPlace info={data}/>
            <Why info={data}/>
            <History info={data}/>
            <Line/>
            <ServicesBlock info={data}/>
            <Line/>
            <Restaurants info={data}/>
            <BeginTravel info={data}/>
            <Footer/>
        </section>
    )
}
