import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMockMovieDetail } from '@/__mocks__'
import { DBSchema } from '@/__mocks__/db'
import Flexbox from '@/components/atoms/Flexbox'
import Poster from '@/components/molecules/Poster'
import Text from '@/components/atoms/Text'
import Rating from '@/components/molecules/Rating'
import MetaInfo from './MetaInfo'

const LayoutMovie: React.FC<
  React.PropsWithChildren<{
    onFetched: (movie?: DBSchema['movies'][0]) => void
  }>
> = ({ onFetched, children }) => {
  const { movieId } = useParams()
  const { data } = useQuery(['movie', movieId], () =>
    getMockMovieDetail(Number(movieId))
  )

  const movie = data?.data
  useEffect(() => {
    onFetched(movie)
  }, [movie, onFetched])

  return (
    <Flexbox gap={6}>
      <div className="w-2/6">
        <Poster
          title={movie?.title || ''}
          source={movie?.poster.portrait || ''}
        />
      </div>
      <div className="w-4/6">
        <Flexbox justify="between" className="mb-4" gap={10}>
          <Text as="h2" size="3xl" color="primary" weight="medium">
            {movie?.title}
          </Text>
          <Rating rating={movie?.rating || 0} />
        </Flexbox>

        <MetaInfo
          releaseDate={movie?.release_date || ''}
          genres={movie?.genres || []}
          director={movie?.director || ''}
          duration={movie?.duration || 0}
          country={movie?.country || ''}
        />

        <Flexbox direction="col" className="mb-6">
          <Text size="lg" color="primary" weight="medium" className="mb-2">
            Synopsis
          </Text>
          <Text>{movie?.synopsis}</Text>
        </Flexbox>

        {children}
      </div>
    </Flexbox>
  )
}

export default LayoutMovie
