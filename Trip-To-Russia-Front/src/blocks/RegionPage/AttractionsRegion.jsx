import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'

import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Link} from "react-router-dom";

export default function AttractionsRegion({info}) {
    return (
        <section>
            <div className="attractions">Выбери город для посещения</div>
        <Swiper
            freeMode={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            navigation
            speed={500}
            className='city-place'>
            {info.Slider.map((place, index) => (
                <SwiperSlide key={index} className='image-container'>
                    <Link to={place.Link} className="no-underline">
                        <img src={place.image} alt={place.title} className='image-attraction'/>
                    </Link>
                    <Link to={place.Link} className="no-underline">
                        <p className='text-city-place'>{place.title}</p>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
        </section>
    )
}