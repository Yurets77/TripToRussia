import {Context} from "../../main.jsx";
import {useState, useContext, useEffect} from "react";
import InputMask from "comigo-tech-react-input-mask";

export default function ChangeContacts (){
    const {store} = useContext(Context)
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [oldEmail, setOldEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [changeData, setChangeData] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    setEmail(store.user.email)
                    setOldEmail(store.user.email)
                    setTelephone(store.user.telephone)
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();
    }, []);
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const handleClick = async (e) => {
        if(EMAIL_REGEXP.test(email)){
            setValidEmail(true)
            await store.changeContacts(oldEmail, email, telephone)
            setTimeout(() => window.location.reload() , 1000)
            setChangeData(true)
        } else {
            setValidEmail(false)
            e.preventDefault();
        }
    }

    return (
        <main className='registration-form'>
            <form>
                <label htmlFor="surname">Email:</label>
                <input className='InputMaskStyle' type="email" id="email" onChange={(e)=> setEmail(e.target.value)} value={email}
                       name="email" placeholder='Email' required/>
                {!validEmail? <p className='red-warning'>Неправильный формат email</p> : null}
                <br/>
                <label htmlFor="telephone">Телефон:</label>
                <InputMask mask='+7 (999) 999-99-99' placeholder='+7 (999) 999-99-99' className='InputMaskStyle' id='telephone' name='telephone' onChange={(e)=> setTelephone(e.target.value)} value={telephone} required/>
                {changeData ? <p className='green-success'>Данные успешно изменены</p> : null }
                <button className='' type={"button"} onClick={handleClick}>Изменить данные</button>
            </form>
        </main>
    )
}