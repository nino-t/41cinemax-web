import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SeatItem } from '../../molecules/SeatButton/SeatButton.interface'

import Seats from './Seats'

// Helper function to generate seats
const generateSeats = (
  rows: string[],
  columns: number,
  reservedSeats: string[] = []
): SeatItem[] => {
  const seats: SeatItem[] = []
  rows.forEach((row) => {
    for (let i = 1; i <= columns; i++) {
      const id = `${row}${i}`
      seats.push({
        id,
        row,
        column: i.toString(),
        label: `${row}-${i}`,
        available: true,
        reserved: reservedSeats.includes(id),
        selected: false
      })
    }
  })
  return seats
}

const meta = {
  title: 'Components/Organisms/Seats',
  component: Seats,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Seats>

export default meta
type Story = StoryObj<typeof Seats>

// Default view with interactive selection
const InteractiveTemplate: Story['render'] = (args) => {
  const [seats, setSeats] = useState<SeatItem[]>(
    generateSeats(['A', 'B', 'C'], 10, ['A3', 'B5', 'C7'])
  )

  const handleSeatSelect = (selectedSeat: SeatItem) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === selectedSeat.id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    )
  }

  return (
    <div className="w-[800px]">
      <Seats {...args} seats={seats} onSeatSelect={handleSeatSelect} />
    </div>
  )
}

export const Default: Story = {
  render: InteractiveTemplate,
  args: {
    maxSelect: 6,
    spaceInColumns: [4, 8]
  }
}

// Small theater layout
export const SmallTheater: Story = {
  render: InteractiveTemplate,
  args: {
    maxSelect: 4,
    spaceInColumns: [3, 6]
  },
  parameters: {
    docs: {
      description: {
        story:
          'A smaller theater layout with fewer seats and different spacing.'
      }
    }
  }
}

// Large theater with many seats
const LargeTheaterTemplate: Story['render'] = (args) => {
  const [seats, setSeats] = useState<SeatItem[]>(
    generateSeats(['A', 'B', 'C', 'D', 'E', 'F'], 12, [
      'A3',
      'B5',
      'C7',
      'D4',
      'E8',
      'F2'
    ])
  )

  const handleSeatSelect = (selectedSeat: SeatItem) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === selectedSeat.id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    )
  }

  return (
    <div className="w-[1000px]">
      <Seats {...args} seats={seats} onSeatSelect={handleSeatSelect} />
    </div>
  )
}

export const LargeTheater: Story = {
  render: LargeTheaterTemplate,
  args: {
    maxSelect: 8,
    spaceInColumns: [4, 8]
  }
}

// Many reserved seats
const MostlyReservedTemplate: Story['render'] = (args) => {
  const [seats, setSeats] = useState<SeatItem[]>(
    generateSeats(['A', 'B', 'C'], 10, [
      'A1',
      'A2',
      'A3',
      'A4',
      'B2',
      'B3',
      'B4',
      'B5',
      'C1',
      'C2',
      'C3'
    ])
  )

  const handleSeatSelect = (selectedSeat: SeatItem) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === selectedSeat.id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    )
  }

  return (
    <div className="w-[800px]">
      <Seats {...args} seats={seats} onSeatSelect={handleSeatSelect} />
    </div>
  )
}

export const MostlyReserved: Story = {
  render: MostlyReservedTemplate,
  args: {
    maxSelect: 4,
    spaceInColumns: [4, 8]
  }
}

// Custom spacing
export const CustomSpacing: Story = {
  render: InteractiveTemplate,
  args: {
    maxSelect: 6,
    spaceInColumns: [3, 6, 9],
    className: 'gap-6'
  }
}
