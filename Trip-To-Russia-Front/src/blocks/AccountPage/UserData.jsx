import {useContext, useEffect, useState} from "react";
import {Context} from "../../main.jsx";
import {Link} from "react-router-dom";

export default function UserData(){
    const {store} = useContext(Context);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    setName(store.user.name)
                    setSurname(store.user.surname)
                    setGender(store.user.gender)
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();
    }, []);
    return(
        <section className='user-info-section'>
            <div className='user-name-info'>
                <div className='verificated'>
                    <h3 className='user-fio-div'>{`${name} ${surname}`}</h3>
                </div>
                <div className='redact-container'>
                    <Link to='ChangeInfo' className='no-underline'>
                        <p className='redact-text'>Редактировать</p>
                    </Link>
                </div>
            </div>
            <div className='user-info'>
                <p className='account-text-info'>Пол:</p>
                <p className='text-user-info'>{gender}</p>
            </div>
            <div>
            </div>
        </section>
    )
}