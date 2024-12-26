import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getMockMovies } from '@/__mocks__'
import Section from '@/components/atoms/Section'
import MovieCard from '@/components/organisms/MovieCard'

const NowShowingMovies: React.FC = () => {
  const navigate = useNavigate()
  const { data } = useQuery(['onshowing-movies'], () =>
    getMockMovies({ limit: 8 })
  )

  const movies = data?.data || []
  return (
    <Section>
      <div className="grid grid-cols-4 gap-6">
        {movies?.map(
          ({ id, title, poster, rating, genres, release_date }, index) => (
            <MovieCard
              key={index}
              title={title}
              thumbnail={poster.landscape}
              releaseDate={release_date}
              genres={genres}
              rating={rating}
              onGetTickets={() => navigate(`/movies/${id}/booking`)}
              onSeeDetails={() => navigate(`/movies/${id}`)}
            />
          )
        )}
      </div>
    </Section>
  )
}

export default NowShowingMovies
