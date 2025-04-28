import './Main.css'
import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../main.jsx";
export default function Header () {
    const [email, setEmail] = useState('')
    const [logged, setLogged] = useState(false)
    const {store} = useContext(Context)
    const location = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                try {
                    await store.checkAuth();
                    setEmail(store.user.email)
                    setLogged(true)
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchData();
    }, []);


    return (
        <nav>
            <div className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="navbar-brand" href="#">
                        <Link to='/'><img src='/Photo/logo-black.png' width='120px' height='75px'/></Link>
                        <Link to='/index' className="no-underline color-black">Trip to Russia</Link></div>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/index' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                    Главная
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/teamsite'
                                      className={`nav-link ${location.pathname === '/teamsite' ? 'active' : ''}`}>
                                    О нас
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/collaboration'
                                      className={`nav-link ${location.pathname === '/collaboration' ? 'active' : ''}`}>
                                    Сервисы
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Algo'
                                      className={`nav-link ${location.pathname === '/planning' ? 'active' : ''}`}>
                                    Планирование
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/WelcomeAll'
                                      className={`nav-link ${location.pathname === '/WelcomeAll' ? 'active' : ''}`}>
                                    Специальные предложения
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <form>
                        <a href="/basket" className="a-basket-header">
                            <img src="./Photo/Purchases/trash-head.png" className="trash-header-icon"/>
                        </a>
                        {
                            logged ? (
                                <Link to='/Account/' className='no-underline'>
                                    <div className='user-part'>
                                        <img src=''/>
                                        <p className='header-email'>{email}</p>
                                    </div>
                                </Link>
                            ) : (<Link to='/Registration' className="no-underline">
                                <button className='button-start'>Зарегистрироваться</button>
                            </Link>)
                        }
                    </form>
                </div>
            </div>
        </nav>
    )
}