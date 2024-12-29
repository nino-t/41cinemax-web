import React from 'react'
import { Play } from 'lucide-react'
import truncate from 'lodash/truncate'
import { useQuery } from 'react-query'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getMockPromotedMovies } from '@/__mocks__'
import Carousel from '@/components/atoms/Carousel'
import Flexbox from '@/components/atoms/Flexbox'
import Text from '@/components/atoms/Text'
import YoutubePlayer from '@/components/organisms/YoutubePlayer'
import Button from '@/components/atoms/Button'

const Wrapper = styled.div`
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #b3b3b3;
    margin-top: 0;
    position: absolute;
    top: auto;
    bottom: 60px;
    &:after {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .swiper-button-prev {
    left: 1.5rem;
  }
  .swiper-button-next {
    left: calc(1.5rem + 126px);
  }
  .swiper-pagination {
    position: absolute;
    width: auto;
    left: calc(1.5rem + 46px);
    bottom: 70px;
  }
`

const PromotedMovies: React.FC = () => {
  const navigate = useNavigate()

  // Mengambil data mock film promosi sebanyak 4 data
  const { data } = useQuery(['promoted-movies'], () =>
    getMockPromotedMovies({ limit: 4 })
  )

  const movies = data?.data || []
  return (
    <Wrapper>
      <Carousel
        slides={movies.map((movie) => (
          <Flexbox
            key={movie.id}
            className="bg-white rounded-lg border shadow p-6 mb-8 min-h-[460px]"
          >
            <div className="w-[40%] pr-6">
              <Text color="primary" className="mb-2">
                {movie.genres.join(', ')}
              </Text>
              <Text as="h2" size="4xl" weight="bold">
                {movie.title}
              </Text>
              <Text className="mt-4 mb-6">
                {truncate(movie.synopsis, { length: 380 })}
              </Text>
              <Button onClick={() => navigate(`/movie/${movie.id}`)} rounded>
                <Play size={16} className="mr-2" />
                See Details
              </Button>
            </div>
            <div className="w-[60%] relative">
              <YoutubePlayer
                title={movie.title}
                thumbnailURL={movie.poster.landscape}
                videoURL={movie.trailer_url}
              />
            </div>
          </Flexbox>
        ))}
      />
    </Wrapper>
  )
}

export default PromotedMovies
