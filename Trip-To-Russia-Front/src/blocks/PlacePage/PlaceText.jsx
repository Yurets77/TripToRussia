import {Link} from "react-router-dom";

export default function PlaceText({info}) {
    return (
        <section>
            <div className="container-text">
                <h1 className="vdnh-name">{info.placeText.place}</h1>
                <Link to={info.placeText.link} className="decor-to-msk"><h2 className="to-msk">{info.placeText.city}</h2></Link>
            </div>
            <div className="line"></div>
        </section>

    )
}