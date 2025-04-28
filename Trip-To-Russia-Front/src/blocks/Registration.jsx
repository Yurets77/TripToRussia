import RegPageHeader from "./HeaderReg.jsx";
import RegForm from "./RegPage/FormReg.jsx";
import FooterReg from "./FooterReg.jsx";
import {useContext, useEffect} from "react";
import {Context} from "../main.jsx";
import {useNavigate} from "react-router-dom";

export default function Registration() {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    navigate('/')

                } catch (error) {
                    console.log(error);
                }
            } else {
                navigate('/registration')
            }
        };
        fetchData();
    }, []);


    return (
        <section className="reg-container">
            <RegPageHeader/>
            <RegForm/>
            <FooterReg/>
        </section>
    )

}