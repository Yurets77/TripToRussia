export default function OtherAttractions({ info }) {

    return (
        <section>
            <div className="attractions">Другие достопримечательности</div>
            <div className="city-favorite">
                <div className="image-c-favorite">
                    {info.otherAttraction.map((slide, index) => (
                        <div key={index}>
                            <a href={slide.link} className="no-underline">
                                <img src={slide.image} alt={slide.name} className='image-attraction'/>
                            </a>
                            <a href={slide.link} className="no-underline">
                                <p className='text-favorite'>{slide.name}</p>
                            </a>
                            <p className='text-favorite-discription'>{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}