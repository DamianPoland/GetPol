import React from 'react'
import './TouchSlider.css' // change classes eg pagination color



// Swiper
import SwiperCore, { EffectCoverflow, Navigation, Pagination, EffectCube, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

// Import Swiper modules
import 'swiper/components/navigation/navigation.scss'// navigations => arrows
import 'swiper/components/pagination/pagination.scss'// paginations => bottom dots
import 'swiper/components/effect-coverflow/effect-coverflow.scss'// effect coverflow
import 'swiper/components/effect-cube/effect-cube.scss'// effect cube



// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectCoverflow, EffectCube]);


/* Description:
1. npm i swiper
2. npm install node-sass => must reload npm start
3. import { Swiper, SwiperSlide } from 'swiper/react'; import 'swiper/swiper.scss';
4. in props push itemsArray with all slides
*/

const TouchSlider = props => {
    return (
        <Swiper
            style={{ padding: "1rem 0 3rem 0" }}
            effect="coverflow" // cube or coverflow
            spaceBetween={0} // margin
            slidesPerView={window.innerWidth > 500 ? 3 : 1} // how many slides visible => according to with (pnone => 1 and PC => 3)
            loop={true}
            navigation
            pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {props.itemsArray.map((item, index) =>

                // slider item
                <SwiperSlide key={index} onClick={() => console.log("click: ", item)}>
                    <div className="swiper-slider-ontainer-custom">
                        {item}
                    </div>
                </SwiperSlide>)}

        </Swiper>
    )
}

export default TouchSlider
