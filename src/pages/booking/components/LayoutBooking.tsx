import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import { getMockMovieDetail } from '@/__mocks__'
import { DBSchema } from '@/__mocks__/db'
import Text from '@/components/atoms/Text'
import Flexbox from '@/components/atoms/Flexbox'
import Poster from '@/components/molecules/Poster'
import MovieTextInfo from './MovieTextInfo'

const LayoutBooking: React.FC<
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
      <div className="w-3/12">
        <Poster
          title={movie?.title || ''}
          source={movie?.poster.portrait || ''}
        />
        <Flexbox gap={2} direction="col" className="mt-4">
          <MovieTextInfo
            label="Release"
            value={dayjs(movie?.release_date || '').format('DD MMMM YYYY')}
          />
          <MovieTextInfo label="Genre" value={movie?.genres.join(', ') || ''} />
          <MovieTextInfo label="Director" value={movie?.director || ''} />
          <MovieTextInfo
            label="Duration"
            value={`${movie?.duration || 0} minute`}
          />
        </Flexbox>
      </div>
      <div className="w-9/12">
        <Text size="2xl" weight="semibold" color="primary" className="mb-8">
          {movie?.title}
        </Text>

        {children}
      </div>
    </Flexbox>
  )
}

export default LayoutBooking
