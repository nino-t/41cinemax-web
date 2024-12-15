import React, { useMemo } from 'react'

import CinemaScreen from '../../atoms/CinemaScreen'
import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import SeatButton from '../../molecules/SeatButton'
import { SeatItem } from '../../molecules/SeatButton/SeatButton.interface'
import SeatLegends from '../../molecules/SeatLegends'
import { SeatsProps } from './Seats.interface'

const seatColors = {
  available: 'bg-gray-200 hover:bg-gray-300',
  reserved: 'bg-gray-400',
  selected: 'bg-yellow-600 hover:bg-yellow-700'
}

const Seats: React.FC<SeatsProps> = ({
  seats,
  onSeatSelect,
  maxSelect = 6,
  className = '',
  spaceInColumns = []
}) => {
  const seatsByRow = useMemo(() => {
    return seats.reduce(
      (acc, seat) => {
        if (!acc[seat.row]) {
          acc[seat.row] = []
        }
        acc[seat.row].push(seat)
        return acc
      },
      {} as Record<string, SeatItem[]>
    )
  }, [seats])

  const selectedSeatsCount = useMemo(() => {
    return seats.filter((seat) => seat.selected).length
  }, [seats])

  const handleSeatClick = (seat: SeatItem) => {
    if (selectedSeatsCount >= maxSelect && !seat.selected) {
      return
    }
    onSeatSelect(seat)
  }

  return (
    <div className={`w-full ${className}`}>
      <CinemaScreen />
      <div className="mb-6" />
      <div className="grid gap-y-4 mb-6">
        {Object.entries(seatsByRow).map(([row, rowSeats]) => {
          const rowSeatsWithSpace = spaceInColumns.map(
            (number) => `${row}${number}`
          )
          return (
            <Flexbox key={row} align="center" gap={4}>
              <Text
                as="span"
                size="xs"
                weight="bold"
                color="secondary"
                className="w-6"
              >
                {row}
              </Text>
              <Flexbox justify="center" gap={4} className="flex-1 mr-12">
                {rowSeats.map((seat) => (
                  <SeatButton
                    key={seat.id}
                    seat={seat}
                    onClick={() => handleSeatClick(seat)}
                    disabled={selectedSeatsCount >= maxSelect && !seat.selected}
                    className={
                      rowSeatsWithSpace.includes(seat.label) ? 'ml-6' : ''
                    }
                    seatColors={seatColors}
                  />
                ))}
              </Flexbox>
            </Flexbox>
          )
        })}
      </div>
      <SeatLegends
        availableColor={seatColors.available}
        reservedColor={seatColors.reserved}
        selectedColor={seatColors.selected}
      />
    </div>
  )
}

export default Seats
