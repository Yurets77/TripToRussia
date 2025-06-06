export default function RegionUnic({info}) {
    return(
        <section>
            <div className="attractions">Уникальные места</div>
            <div className="city-favorite">
                <div className="image-container-favorite">
                    {info.Unicplace.map((place, index) => (
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