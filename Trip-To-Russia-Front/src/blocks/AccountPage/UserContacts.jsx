import {Context} from "../../main.jsx";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function UserContacts(){
    const {store} = useContext(Context);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [activated, setActivated] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    setEmail(store.user.email)
                    setMobile(store.user.telephone)
                    setActivated(store.user.isActivated)
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();
    }, []);
    return (
        <section className='user-info-section'>
            <h2 className='contacts-data'>Контактные данные</h2>
            <div className='user-contacts'>
                <div className='user-contacts-info'>
                    <p className='account-text-info'>Мобильный телефон:</p>
                    <p className='text-user-info'>{mobile}</p>
                </div>
                <div className='redact-container'>
                    <Link to='ChangeContacts' className='no-underline'>
                        <p className='redact-text'>Редактировать</p>
                    </Link>
                </div>
            </div>
            <hr/>
            <div className='user-contacts'>
                <div className='user-contacts-info'>
                    <p className='account-text-info'>Личная электронная почта:</p>
                    <div className='verificated-div'>
                        <p className='text-user-info'>{email}</p>
                        {activated? <img src='/Photo/ver.svg' className='verificated-svg'/> : null}
                    </div>
                </div>
                <div className='redact-container'>
                    <Link to='ChangeContacts' className='no-underline'>
                        <p className='redact-text'>Редактировать</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}