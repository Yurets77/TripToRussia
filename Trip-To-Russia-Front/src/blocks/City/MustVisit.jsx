export default function MustVisit({info}) {
    return (
<section>
    <div className="text-for-visit-reg">Стоит посетить</div>
            <div className="city-favorite width100">
                <div className="image-container-favorite-city">
                    {info.MustVisit.map((place, index) => (
                        <li className="list-style" key={index}>
                            <img src={place.image} alt={place.name} />
                            <p className="text-favorite">{place.name}</p>
                            <p className="text-favorite-discription">{place.description}</p>
                        </li>
                    ))}
                </div>
            </div>
</section>
    )
}