import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[400px] w-[99%] object-cover"
      >
        <SwiperSlide><img
              src="./src/assets/1.jpg"
              className="rounded-2xl object-cover w-full h-[95%]"
              
            /></SwiperSlide>
        <SwiperSlide><img
              src="./src/assets/4.jpg"
              className="rounded-2xl object-cover w-full h-[95%]"
              
            /></SwiperSlide>
        <SwiperSlide><img
              src="./src/assets/5.jpg"
              className="rounded-2xl object-cover w-full h-[95%]"
            /></SwiperSlide>
        <SwiperSlide><img
              src="./src/assets/6.png"
              className="rounded-2xl object-fill w-full h-[95%]"
            /></SwiperSlide>
        <SwiperSlide><img
              src="./src/assets/8.jpg"
              className="rounded-2xl object-contain w-full h-[95%]"
            /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
