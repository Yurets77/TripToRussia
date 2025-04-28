import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'

import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Link} from "react-router-dom";

export default function Attractions ({slides}) {
    return ( 
        <Swiper
            freeMode={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            navigation
            speed={500}
            className='city-place'>
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className='image-container'>
                    <Link to={slide.Link} className="no-underline">
                        <img src={slide.image} alt={slide.title} className='image-attraction'/>
                    </Link>
                    <Link to={slide.Link} className="no-underline">
                        <p className='text-city-place'>{slide.title}</p>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
)
}