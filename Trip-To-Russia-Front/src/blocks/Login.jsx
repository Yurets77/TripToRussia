import RegPageHeader from "./HeaderReg.jsx";
import LogForm from "./RegPage/FormLog.jsx";
import FooterReg from "./FooterReg.jsx";
import {useContext, useEffect} from "react";
import {Context} from "../main.jsx";
import {useNavigate} from "react-router-dom";

export default function Login() {
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
                navigate('/login'); // Navigate to login page if no token is present
            }
        };
        fetchData();
    }, []);

    return(
        <section className="reg-container">
                <RegPageHeader/>
                <LogForm/>
                <FooterReg/>
        </section>
    )
}