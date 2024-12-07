import styled from 'styled-components'

export const Wrapper = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #eebd79;
  }

  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: #b3b3b3;
      &.swiper-pagination-bullet-active {
        background-color: #eebd79;
        width: 18px;
        border-radius: 10px;
      }
    }
  }
`
