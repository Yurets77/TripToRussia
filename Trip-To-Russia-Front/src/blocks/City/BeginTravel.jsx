import {Link} from "react-router-dom";

export default function BeginTravel({info}) {
    return (
        <section>
        <div class="block5">
            <div class="overlay-5">
                <div class="block5-content">
                    <img src="/Photo/logo-black.png"/>
                    <h1>ВАШЕ ПРИКЛЮЧЕНИЕ НАЧИНАЕТСЯ ЗДЕСЬ</h1>
                    <Link to={info.BeginTravel.Link} className="no-underline">
                    <button class="plan-button">НАЧАТЬ ПЛАНИРОВАНИЕ</button>
                    </Link>
                </div>
            </div>
        </div>
        </section>
    )
}