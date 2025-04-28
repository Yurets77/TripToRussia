export default function ServicesBlock({info}) {
    return (
    <section>
        <div class="services-container">
            <h1 className="servH1">ЗДЕСЬ ВЫ НАЙДЕТЕ</h1>
            <h2 className="servH2">ПОПУЛЯРНЫЕ УСЛУГИ</h2>
            <div class="service-list">
            {info.ServicesMap.map((place, index) => (
                <div class="service-item" key={index}>
                    <img src={place.image} alt={place.name}/>
                    <h3 class="service-title">{place.title}</h3>
                    <p class="service-description">{place.description}</p>
                    <div class="price">{place.price}</div>
                    <button class="service-button">Оставить заявку</button>
                </div>
            ))}
            </div>
        </div>
    </section>
    )
}