import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import {Context} from "../../main.jsx";
import {useContext} from "react";
function LogForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userFind, setUserFind] = useState(true);
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const handleClick = async (e) => {
        let loginSuccessful = false;
        try {
            await store.login(email, password)
            loginSuccessful = true;
        } catch (e) {
            setUserFind(false)
        } finally {
            if (loginSuccessful) {
                navigate(-1)
                window.location.reload()
            }
        }
    }
    return (
        <main className="registration-form">
            <h2>Войти</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input onChange={e => setEmail(e.target.value)} value={email} type="text" id="email" name="email" placeholder='Email' required/><br/>
                <label htmlFor="password">Пароль:</label>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" name="password" placeholder='Пароль' required/>
                {!userFind ? <p className='red-warning'>Неправильный email или пароль</p> : null }
                <br/>
                <button className='buttons-active-functional' type={"button"} onClick={handleClick}>Войти</button>
            </form>
            <div className="reg-already">
                <p>Не зарегистрированы?</p>
                <Link to="/Registration" className="no-underline">
                    <p>Зарегистрируйтесь</p>
                </Link>
            </div>
        </main>
    );
}

export default observer(LogForm);