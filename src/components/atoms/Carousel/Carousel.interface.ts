import { SwiperProps } from 'swiper/react'

export interface CarouselProps
  extends Pick<SwiperProps, 'spaceBetween' | 'slidesPerView'> {
  /**
   * The slides to be rendered in the carousel
   * @type React.ReactNode[]
   */
  slides: React.ReactNode[]
}
