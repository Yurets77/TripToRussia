import {Link} from "react-router-dom";
import './NotFound.css'
export default function NotFound (){
    return (
        <section className="body-not-found">
            <div className="container-not-found">
                <h1 className='h1-not-found'>404 - Страница не существует</h1>
                <p className='p-not-found'>Простите, но этой страницы пока еще нет на нашем сайте.</p>
                <p className='p-not-found'>Вы можете вернуться на главную страницу сайта и найти то, что вам нужно, перейдя по ссылке <Link className='no-underline' to="/Index">Главная страница</Link>.</p>
            </div>
        </section>
    )
}