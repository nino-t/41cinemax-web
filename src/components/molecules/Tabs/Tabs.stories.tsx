import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Tabs from './Tabs'
import { Star } from 'lucide-react'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    activeTab: {
      control: 'text',
      description: 'Key dari tab yang sedang aktif'
    },
    tabs: {
      description: 'Array of tab objects dengan key, label, dan element'
    },
    className: {
      control: 'text',
      description: 'Class CSS tambahan menggunakan Tailwind'
    }
  }
}

export default meta
type Story = StoryObj<typeof Tabs>

// Story untuk tabs dasar
export const Default: Story = {
  render: function Render() {
    const [activeTab, setActiveTab] = useState('overview')

    const tabs = [
      {
        key: 'overview',
        label: 'Overview',
        element: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Movie Overview</h3>
            <p className="text-gray-600">
              This is the overview content for the movie. It contains basic
              information and a synopsis of the plot.
            </p>
          </div>
        )
      },
      {
        key: 'reviews',
        label: 'Reviews',
        element: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">User Reviews</h3>
            <p className="text-gray-600">
              Here you can find user reviews and ratings for the movie.
            </p>
          </div>
        )
      },
      {
        key: 'cast',
        label: 'Cast',
        element: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Cast & Crew</h3>
            <p className="text-gray-600">
              List of actors, directors, and other crew members involved in the
              movie.
            </p>
          </div>
        )
      }
    ]

    return <Tabs activeTab={activeTab} tabs={tabs} onTabChange={setActiveTab} />
  }
}

// Story untuk tabs dengan icons
export const WithIcons: Story = {
  render: function Render() {
    const [activeTab, setActiveTab] = useState('now')

    const tabs = [
      {
        key: 'now',
        label: 'Now Playing',
        element: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Now Playing Movies</h3>
            <p className="text-gray-600">
              Movies currently showing in theaters.
            </p>
          </div>
        )
      },
      {
        key: 'upcoming',
        label: 'Upcoming',
        element: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Upcoming Movies</h3>
            <p className="text-gray-600">Movies coming soon to theaters.</p>
          </div>
        )
      },
      {
        key: 'popular',
        label: 'Popular',
        element: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Popular Movies</h3>
            <p className="text-gray-600">Most popular movies right now.</p>
          </div>
        )
      }
    ]

    return <Tabs activeTab={activeTab} tabs={tabs} onTabChange={setActiveTab} />
  }
}

// Story untuk tabs dengan konten kompleks
export const ComplexContent: Story = {
  render: function Render() {
    const [activeTab, setActiveTab] = useState('details')

    const tabs = [
      {
        key: 'details',
        label: 'Movie Details',
        element: (
          <div className="p-4 space-y-4">
            <div className="flex gap-4">
              <img
                src="https://placehold.co/150x225/png"
                alt="Movie Poster"
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Inception</h3>
                <p className="text-gray-600">2010 • Action, Sci-Fi • 2h 28m</p>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">8.8/10</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting an
              idea into the mind of a C.E.O.
            </p>
          </div>
        )
      },
      {
        key: 'comments',
        label: 'Comments',
        element: (
          <div className="p-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">User {i}</div>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Star className="w-4 h-4" />
                    <span>{5 - i}</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        )
      },
      {
        key: 'favorites',
        label: 'Add to Favorites',
        element: (
          <div className="p-4 text-center">
            <p className="text-gray-600">
              Add this movie to your favorites list!
            </p>
          </div>
        )
      }
    ]

    return (
      <Tabs
        activeTab={activeTab}
        tabs={tabs}
        onTabChange={setActiveTab}
        className="w-full max-w-2xl"
      />
    )
  }
}
