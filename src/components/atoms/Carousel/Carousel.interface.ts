import { SwiperProps } from 'swiper/react'

export interface CarouselProps
  extends Pick<SwiperProps, 'spaceBetween' | 'slidesPerView'> {
  /**
   * Kumpulan konten yang akan ditampilkan sebagai slides dalam carousel.
   * @type {React.ReactNode[]}
   * @example
   * const slides = [
   *   <img src="slide1.jpg" alt="Slide 1" />,
   *   <img src="slide2.jpg" alt="Slide 2" />,
   *   <div>Custom slide content</div>
   * ]
   * <Carousel slides={slides} />
   */
  slides: React.ReactNode[]
}
