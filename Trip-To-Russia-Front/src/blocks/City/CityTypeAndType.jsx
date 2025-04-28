export default function CityTypeAndType({info}) {
    return (
    <div className="city-recommendations">
        <div className="recommendation-titles">
            <span>Когда лучше посетить</span>
            <span>Рекомендуемый вид отдыха</span>
        </div>
        <div className="recommendation-images">
            <div className="image-box">
                <img src={info.Season1.image} alt={info.Season1.name}/>
                <p className="image-caption">{info.Season1.name}</p>
            </div>
            <div className="image-box">
                <img src={info.TypesTourism.image} alt={info.TypesTourism.name}/>
                <p className="image-caption">{info.TypesTourism.name}</p>
            </div>
        </div>
    </div>
    )
}