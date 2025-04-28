export default function CityText({info}) {
    return (
        <div class="city-info">
            <h1 class="text-city">{info.City.name}</h1>
            <p class="p-discription">{info.City.description1}</p>
            <p class="p2-discription">{info.City.description2}</p>
        </div>
    )
}