import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../main.jsx";
import {useContext, useState} from "react";
import InputMask from "comigo-tech-react-input-mask";

export default function RegForm() {
    const {store} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [telephone, setTelephone] = useState('')
    const [repassword, setRepassword] = useState('')
    const [samePass, setSamePass] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [gender, setGender] = useState('')
    const navigate = useNavigate();
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const handleClick = async (e) => {
        if (password === repassword && EMAIL_REGEXP.test(email) ){
            setSamePass(true)
            await store.registration(email, password, name, surname, telephone, repassword, gender)
            navigate(-1)
            window.location.reload();
        } if(password !== repassword) {
            setSamePass(false)
            e.preventDefault();
        } if (!EMAIL_REGEXP.test(email)) {
            setValidEmail(false)
            e.preventDefault()
        }
    }
    return(
        <main className="registration-form">
            <h2>Регистрация</h2>
            <form onSubmit={handleClick}>
                <label htmlFor="name">Имя:</label>
                <input onChange={e => setName(e.target.value)} value={name} type="text" id="name" name="name"
                       placeholder='Имя' required/><br/>
                <label htmlFor="surname">Фамилия:</label>
                <input onChange={e => setSurname(e.target.value)} value={surname} type="text" id="surname"
                       name="surname"
                       placeholder='Фамилия' required/><br/>
                <label>Пол:</label>
                <select className='gender-select' value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="">Выберите пол</option>
                    <option value='Мужской'>Мужской</option>
                    <option value='Женский'>Женский</option>
                </select>
                <br/><br/>
                <label htmlFor='telephone'>Телефон:</label>
                <InputMask className='InputMaskStyle' mask="+7 (999) 999-99-99"
                           onChange={e => setTelephone(e.target.value)} value={telephone}
                           type="tel" id="telephone" name="telephone" placeholder='+7 (999) 999-99-99'/><br/>
                <label htmlFor="email">Email:</label>
                <input onChange={e => setEmail(e.target.value)} value={email} type="text" id="email" name="email"
                       placeholder='Email' required/>
                {!validEmail ? <p className='red-warning'>Неправильный формат email</p> : null}
                <br/>
                <label htmlFor="password">Пароль:</label>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password"
                       name="password" placeholder='Пароль' required/><br/>
                <label htmlFor="repassword">Повторите пароль:</label>
                <input onChange={e => setRepassword(e.target.value)} value={repassword} type="password" id="repassword"
                       name="repassword" placeholder='Повторите пароль' required/>
                <p className='reg-warning'>{!samePass ? 'Пароли не сходятся' : null}</p><br/>
                <button className='buttons-active-functional' type={"button"} onClick={handleClick}>
                    Зарегистрироваться
                </button>
            </form>
            <div className="reg-already">
                <p>Уже зарегистрированы?</p>
                <Link to="/Login" className="no-underline">
                    <p>Войти</p>
                </Link>
            </div>
        </main>
    )
}