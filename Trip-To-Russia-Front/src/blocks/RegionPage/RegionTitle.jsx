export default function RegionTitle({info}) {
    return(
                <div className="city-info">
                    <h1 className="text-city">{info.Region.name}</h1>
                    <p className="p-discription">{info.Region.descriptionP1}</p>
                    <p className="p2-discription">{info.Region.descriptionP2}</p>
                </div>

    )
}