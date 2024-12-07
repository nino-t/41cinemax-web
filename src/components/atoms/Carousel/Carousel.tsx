import React from 'react'

import 'swiper/swiper-bundle.css'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselProps } from './Carousel.interface'
import { Wrapper } from './Carousel.styled'

const Carousel: React.FC<CarouselProps> = ({
  slides = [],
  slidesPerView = 1,
  spaceBetween = 0
}) => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  )
}

export default Carousel
