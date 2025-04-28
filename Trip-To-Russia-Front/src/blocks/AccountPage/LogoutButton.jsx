import {Context} from "../../main.jsx";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

export default function LogoutButton(){
    const navigate = useNavigate();
    const {store} = useContext(Context);
    const handleLogout = async () => {
        await store.logout()
        navigate("/")
        window.location.reload()
    }
    return(
        <section>
            <div className='logout-button-div'>
                <button className='buttons-active-functional' onClick={handleLogout}>Выйти</button>
            </div>
        </section>
    )
}