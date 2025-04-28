import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BodyButtons from "./AccountPage/BodyButtons.jsx";
import {useContext, useEffect, useState} from "react";
import {Context} from "../main.jsx";
import {useNavigate} from "react-router-dom";

export default function AccountPage(){

    const { store } = useContext(Context);
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    setLogged(true);
                } catch (error) {
                    console.log(error);
                }
            } else {
                navigate('/login'); // Navigate to login page if no token is present
            }
        };
        fetchData();
    }, []);



    return(
        <section>
            <Header/>
            <BodyButtons/>
            <Footer/>
        </section>
    )
}