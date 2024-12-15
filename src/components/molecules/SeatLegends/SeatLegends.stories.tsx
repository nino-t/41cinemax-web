import type { Meta, StoryObj } from '@storybook/react'

import SeatLegends from './SeatLegends'

const meta = {
  title: 'Components/Molecules/SeatLegends',
  component: SeatLegends,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SeatLegends>

export default meta
type Story = StoryObj<typeof SeatLegends>

// Default color scheme
export const Default: Story = {
  args: {
    availableColor: 'bg-white',
    reservedColor: 'bg-gray-400',
    selectedColor: 'bg-blue-500'
  }
}

// Green theme
export const GreenTheme: Story = {
  args: {
    availableColor: 'bg-emerald-100',
    reservedColor: 'bg-gray-400',
    selectedColor: 'bg-emerald-500'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Green color scheme suitable for eco-friendly or nature-themed interfaces.'
      }
    }
  }
}

// High contrast theme
export const HighContrast: Story = {
  args: {
    availableColor: 'bg-white',
    reservedColor: 'bg-gray-900',
    selectedColor: 'bg-yellow-400'
  },
  parameters: {
    docs: {
      description: {
        story: 'High contrast color scheme for better accessibility.'
      }
    }
  }
}

// Cinema theme
export const CinemaTheme: Story = {
  args: {
    availableColor: 'bg-red-100',
    reservedColor: 'bg-gray-500',
    selectedColor: 'bg-red-600'
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic cinema color scheme with red accents.'
      }
    }
  }
}

// Dark mode
export const DarkMode: Story = {
  args: {
    availableColor: 'bg-gray-700',
    reservedColor: 'bg-gray-900',
    selectedColor: 'bg-purple-500'
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark mode color scheme for low-light environments.'
      }
    },
    backgrounds: {
      default: 'dark'
    }
  }
}

// Custom with background
const CustomBackgroundTemplate: Story['render'] = (args) => (
  <div className="bg-gray-100 p-6 rounded-lg">
    <SeatLegends {...args} />
  </div>
)

export const WithBackground: Story = {
  render: CustomBackgroundTemplate,
  args: {
    availableColor: 'bg-white',
    reservedColor: 'bg-gray-400',
    selectedColor: 'bg-indigo-500'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Legends displayed on a custom background to demonstrate context usage.'
      }
    }
  }
}
