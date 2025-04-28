export default function RegionTypes({info}) {
    return(
    <div className="city-recommendations">
        <div className="recommendation-titles">
            <span>Когда лучше посетить</span>
            <span>Рекомендуемый вид отдыха</span>
        </div>
        <div className="recommendation-images">
            <div className="image-box">
                <img src={info.SeasonRegion1.image} alt={info.SeasonRegion1.name}/>
                <p className="image-caption">{info.SeasonRegion1.name}</p>
            </div>
            <div className="image-box">
                <img src={info.TypesTourismRegion.image} alt={info.TypesTourismRegion.name}/>
                <p className="image-caption">{info.TypesTourismRegion.name}</p>
            </div>
        </div>
    </div>
)
}   