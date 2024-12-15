import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import SeatButton from './SeatButton'
import { SeatItem } from './SeatButton.interface'

const defaultColors = {
  available: '#eeeeee',
  reserved: '#CCCCCC',
  selected: '#00FF00'
}

const meta = {
  title: 'Components/Molecules/SeatButton',
  component: SeatButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SeatButton>

export default meta
type Story = StoryObj<typeof SeatButton>

// Basic available seat
export const Available: Story = {
  args: {
    seat: {
      id: 'A1',
      row: 'A',
      column: '1',
      label: 'A-1',
      available: true,
      reserved: false,
      selected: false
    },
    seatColors: defaultColors,
    onClick: () => {}
  }
}

// Reserved seat
export const Reserved: Story = {
  args: {
    seat: {
      id: 'B2',
      row: 'B',
      column: '2',
      label: 'B-2',
      available: false,
      reserved: true,
      selected: false
    },
    seatColors: defaultColors,
    onClick: () => {}
  }
}

// Selected seat
export const Selected: Story = {
  args: {
    seat: {
      id: 'C3',
      row: 'C',
      column: '3',
      label: 'C-3',
      available: true,
      reserved: false,
      selected: true
    },
    seatColors: defaultColors,
    onClick: () => {}
  }
}

// Disabled state
export const Disabled: Story = {
  args: {
    seat: {
      id: 'D4',
      row: 'D',
      column: '4',
      label: 'D-4',
      available: true,
      reserved: false,
      selected: false
    },
    seatColors: defaultColors,
    disabled: true,
    onClick: () => {}
  }
}

// Custom colors
export const CustomColors: Story = {
  args: {
    seat: {
      id: 'E5',
      row: 'E',
      column: '5',
      label: 'E-5',
      available: true,
      reserved: false,
      selected: false
    },
    seatColors: {
      available: '#E3F2FD',
      reserved: '#CFD8DC',
      selected: '#2196F3'
    },
    onClick: () => {}
  }
}

// Interactive example
const InteractiveSeatTemplate: Story['render'] = () => {
  const [seats, setSeats] = useState<SeatItem[]>([
    {
      id: 'A1',
      row: 'A',
      column: '1',
      label: 'A1',
      available: true,
      reserved: false,
      selected: false
    },
    {
      id: 'A2',
      row: 'A',
      column: '2',
      label: 'A2',
      available: true,
      reserved: true,
      selected: false
    },
    {
      id: 'A3',
      row: 'A',
      column: '3',
      label: 'A3',
      available: true,
      reserved: false,
      selected: false
    }
  ])

  const handleSeatClick = (seatId: string) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, selected: !seat.selected } : seat
      )
    )
  }

  return (
    <div className="flex gap-2">
      {seats.map((seat) => (
        <SeatButton
          key={seat.id}
          seat={seat}
          seatColors={defaultColors}
          onClick={() => handleSeatClick(seat.id)}
        />
      ))}
    </div>
  )
}

export const Interactive: Story = {
  render: InteractiveSeatTemplate,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example showing a row of seats that can be selected/deselected, including a reserved seat.'
      }
    }
  }
}

// Multiple seats grid
const SeatGridTemplate: Story['render'] = () => {
  const rows = ['A', 'B']
  const columns = ['1', '2', '3', '4']

  const generateSeats = () => {
    const seats: SeatItem[] = []
    rows.forEach((row) => {
      columns.forEach((col) => {
        seats.push({
          id: `${row}${col}`,
          row,
          column: col,
          label: `${row}${col}`,
          available: true,
          reserved: Math.random() > 0.7,
          selected: false
        })
      })
    })
    return seats
  }

  const [gridSeats, setGridSeats] = useState<SeatItem[]>(generateSeats())

  const handleGridSeatClick = (seatId: string) => {
    setGridSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, selected: !seat.selected } : seat
      )
    )
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {gridSeats.map((seat) => (
        <SeatButton
          key={seat.id}
          seat={seat}
          seatColors={defaultColors}
          onClick={() => handleGridSeatClick(seat.id)}
        />
      ))}
    </div>
  )
}

export const SeatGrid: Story = {
  render: SeatGridTemplate,
  parameters: {
    docs: {
      description: {
        story: 'Example of a 2x4 grid of seats with randomly reserved seats.'
      }
    }
  }
}
