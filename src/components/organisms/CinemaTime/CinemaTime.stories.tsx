import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import CinemaTime from './CinemaTime'

const defaultTimes = [
  { label: '2D', value: '10:00' },
  { label: 'IMAX 3D', value: '13:30' },
  { label: '2D', value: '15:45' },
  { label: '4DX', value: '18:15' },
  { label: 'IMAX 3D', value: '20:30' }
]

const meta = {
  title: 'Components/Organisms/CinemaTime',
  component: CinemaTime,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CinemaTime>

export default meta
type Story = StoryObj<typeof CinemaTime>

// Default view
export const Default: Story = {
  args: {
    times: defaultTimes,
    value: '13:30',
    onChange: (time) => console.log('Selected time:', time)
  }
}

// No initial selection
export const NoSelection: Story = {
  args: {
    times: defaultTimes,
    onChange: (time) => console.log('Selected time:', time)
  }
}

// Different formats
export const DifferentFormats: Story = {
  args: {
    times: [
      { label: '2D', value: '10:00' },
      { label: 'IMAX 3D', value: '13:30' },
      { label: '4DX', value: '16:00' },
      { label: 'Dolby Atmos', value: '19:15' },
      { label: 'SCREENX', value: '21:45' }
    ],
    value: '16:00',
    onChange: (time) => console.log('Selected time:', time)
  },
  parameters: {
    docs: {
      description: {
        story: 'Showing different movie formats and technologies.'
      }
    }
  }
}

// Interactive example
const InteractiveTemplate: Story['render'] = () => {
  const [selectedTime, setSelectedTime] = useState<string>('')

  return (
    <div className="w-[600px]">
      <CinemaTime
        times={defaultTimes}
        value={selectedTime}
        onChange={setSelectedTime}
      />
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm">
          Selected time: {selectedTime || 'No time selected'}
        </p>
      </div>
    </div>
  )
}

export const Interactive: Story = {
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing time selection with live feedback.'
      }
    }
  }
}

// Limited showings
export const LimitedShowings: Story = {
  args: {
    times: [
      { label: '2D', value: '15:30' },
      { label: '2D', value: '18:45' }
    ],
    value: '15:30',
    onChange: (time) => console.log('Selected time:', time)
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with limited showing times.'
      }
    }
  }
}

// With validation
const ValidationTemplate: Story['render'] = () => {
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleTimeChange = (time: string) => {
    const currentHour = new Date().getHours()
    const selectedHour = parseInt(time.split(':')[0])

    if (selectedHour < currentHour) {
      setError('Cannot select past show times')
      return
    }

    setError('')
    setSelectedTime(time)
  }

  return (
    <div className="w-[600px]">
      <CinemaTime
        times={defaultTimes}
        value={selectedTime}
        onChange={handleTimeChange}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export const WithValidation: Story = {
  render: ValidationTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Example with time validation to prevent selecting past show times.'
      }
    }
  }
}
