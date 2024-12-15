import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import dayjs from 'dayjs'

import CinemaDate from './CinemaDate'

const meta = {
  title: 'Components/Organisms/CinemaDate',
  component: CinemaDate,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CinemaDate>

export default meta
type Story = StoryObj<typeof CinemaDate>

// Default state
export const Default: Story = {
  args: {
    value: dayjs().format('YYYY-MM-DD'),
    onChange: (date) => console.log('Selected date:', date)
  }
}

// Without initial selection
export const NoSelection: Story = {
  args: {
    onChange: (date) => console.log('Selected date:', date)
  }
}

// Custom width
export const CustomWidth: Story = {
  args: {
    value: dayjs().format('YYYY-MM-DD'),
    className: 'w-[600px]',
    onChange: (date) => console.log('Selected date:', date)
  },
  parameters: {
    docs: {
      description: {
        story:
          'CinemaDate component with custom width to show layout flexibility.'
      }
    }
  }
}

// Interactive example
const InteractiveDateTemplate: Story['render'] = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'))

  return (
    <div className="w-[500px]">
      <CinemaDate value={selectedDate} onChange={setSelectedDate} />
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm">Selected date: {selectedDate}</p>
      </div>
    </div>
  )
}

export const Interactive: Story = {
  render: InteractiveDateTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing date selection with live feedback.'
      }
    }
  }
}

// Mobile view
export const MobileView: Story = {
  args: {
    value: dayjs().format('YYYY-MM-DD'),
    onChange: (date) => console.log('Selected date:', date)
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Mobile viewport display to verify responsive behavior.'
      }
    }
  }
}

// Dark theme
export const DarkTheme: Story = {
  args: {
    value: dayjs().format('YYYY-MM-DD'),
    onChange: (date) => console.log('Selected date:', date)
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'CinemaDate component in dark theme context.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="p-4 bg-gray-800 rounded">
        <Story />
      </div>
    )
  ]
}

// With error handling
const ErrorHandlingTemplate: Story['render'] = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleDateChange = (date: string) => {
    if (dayjs(date).isBefore(dayjs(), 'day')) {
      setError('Cannot select past dates')
      return
    }
    setError('')
    setSelectedDate(date)
  }

  return (
    <div className="w-[500px]">
      <CinemaDate value={selectedDate} onChange={handleDateChange} />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export const WithErrorHandling: Story = {
  render: ErrorHandlingTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Example showing error handling for invalid date selections.'
      }
    }
  }
}
