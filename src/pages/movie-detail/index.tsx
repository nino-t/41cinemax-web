import { useState } from 'react'
import { DBSchema } from '@/__mocks__/db'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import LayoutMovie from './components/LayoutMovie'
import MovieSchedules from './components/MovieSchedules'

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<DBSchema['movies'][0]>()
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Home', to: '/' }, { label: movie?.title || '' }]}
        className="mb-2"
      />
      <LayoutMovie onFetched={setMovie}>
        <MovieSchedules movieId={movie?.id || 0} />
      </LayoutMovie>
    </>
  )
}

export default MovieDetailPage
