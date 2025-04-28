import '../Main.css'
import {Link} from "react-router-dom";

export default function Resend() {
    return (
        <section>
            <div className="line2"></div>
            <div className="bg-behind">
                <div className="container-dop1">
                    <div className="header-left">
                        <h1 className="ways">Живописные маршруты</h1>
                    </div>
                    <div className="header-right">
                        <div className="oval">
                            <p className="dop">Гулять по городам или отправиться в настоящее путешествие!</p>
                        </div>
                        <Link to='/Algo' className="no-underline">
                        <button className="btn-d" value="btn-hz">Выбрать маршрут</button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="container-dop">
                <div className="routes-grid">
                    <div className="route-d">
                        <a>
                            <img src="/Photo/attractionsCity/les.jpeg" alt="Лес"/>
                        </a>
                        <p className="route-caption">Лес</p>
                    </div>
                    <div className="route-d">
                        <a>
                            <img src="/Photo/attractionsCity/mountains.jpeg" alt="Горы"/>
                        </a>
                        <p className="route-caption">Горы</p>
                    </div>
                    <div className="route-d">
                        <a>
                            <img src="/Photo/attractionsCity/Plane.jpeg" alt="Пустыня"/>
                        </a>
                        <p className="route-caption">Пустыня</p>
                    </div>
                </div>
            </div>
        </section>


    )


}