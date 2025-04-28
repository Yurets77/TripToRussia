import {Link} from "react-router-dom";

export default function RegionEvent ({info}){
    return(
        <section>
            <div className="attractions">Уникальные мероприятия</div>
            <div className="city-interest">
                <div className="image-container-interest">
                <Link to='/vdnh'><a><img src={info.Unicevent.image} alt=""/></a></Link>
                    <a className='city-event-text'><h1 className="text-interest">{info.Unicevent.name}</h1></a>
                </div>
            </div>
        </section>

    )
}