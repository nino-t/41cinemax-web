import React from 'react'
import Text from '../../atoms/Text'
import { SeatButtonProps } from './SeatButton.interface'

const SeatButton: React.FC<SeatButtonProps> = ({
  seat,
  onClick,
  disabled = false,
  className = '',
  seatColors
}) => {
  const { available, reserved, selected } = seatColors

  const getBackgroundColor = () => {
    if (seat.selected)
      return selected.startsWith('#') ? `bg-[${selected}]` : selected

    if (seat.reserved)
      return reserved.startsWith('#')
        ? `bg-[${reserved}]`
        : reserved + ' cursor-not-allowed'

    return available.startsWith('#') ? `bg-[${available}]` : available
  }

  const buttonClasses = `
    w-8 h-8 rounded-lg
    ${getBackgroundColor()}
    transition-colors duration-200
    disabled:opacity-50 disabled:cursor-not-allowed ${className}
  `

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || seat.reserved}
      className={buttonClasses}
      aria-label={`Seat ${seat.label}`}
      aria-pressed={seat.selected}
    >
      <Text
        as="span"
        size="xs"
        weight={seat.selected ? 'bold' : 'medium'}
        color={seat.selected ? 'white' : 'default'}
        className="select-none"
      >
        {seat.label}
      </Text>
    </button>
  )
}

export default SeatButton
