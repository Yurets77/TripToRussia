export default function RegionBest({info}){
    return(
        <section>
            <div className="attractions">Лучшие места</div>
            <div className="city-place">
                <div className="image-container">
                    {info.Bestplace.map((place, index) => (
                        <li className="list-style" key={index}>
                            <img src={place.image} alt={place.name} />
                            <p className="">{place.name}</p>
                            <p className="">{place.description}</p>
                        </li>
                    ))}
                </div>
            </div>
        </section>
    )
}