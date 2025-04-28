export default function Restaurants({info}) {
    return (
        <section>
        <div className="attractions">Рестораны</div>
        <div className="city-favorite bottttt">
            <div className="image-container-favorite-reg">
                {info.Restaurants.map((place, index) => (
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
