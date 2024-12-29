import { useState } from 'react'
import Tabs from '@/components/molecules/Tabs'
import PromotedMovies from './components/PromotedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import NowShowingMovies from './components/NowShowingMovies'

const tabs = [
  {
    key: 'now-playing',
    label: 'Now Playing',
    element: <NowShowingMovies />
  },
  {
    key: 'upcoming',
    label: 'Upcoming',
    element: <UpcomingMovies />
  }
]

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(() => tabs[0].key)
  return (
    <>
      <PromotedMovies />
      <Tabs activeTab={activeTab} tabs={tabs} onTabChange={setActiveTab} />
    </>
  )
}

export default HomePage
