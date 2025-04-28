export default function CityPhoto({info}) {
    return (
        <section>
            <div className="container-photo">
                <img src={info.City.image} alt={info.City.name} className="main-photo"/>
            </div>
        </section>
    )
}