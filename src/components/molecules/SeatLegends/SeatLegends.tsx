import React from 'react'

import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { SeatLegendProps } from './SeatLegends.interface'

const Legend: React.FC<{ label: string; color: string }> = ({
  label,
  color
}) => {
  const background = color.startsWith('#') ? `bg-[${color}]` : color
  return (
    <Flexbox align="center" gap={2}>
      <div className={`w-4 h-4 ${background} rounded`} />
      <Text size="sm" color="secondary">
        {label}
      </Text>
    </Flexbox>
  )
}

const SeatLegends: React.FC<SeatLegendProps> = ({
  availableColor,
  reservedColor,
  selectedColor
}) => {
  return (
    <Flexbox justify="center" gap={8}>
      <Legend label="Available" color={availableColor} />
      <Legend label="Reserved" color={reservedColor} />
      <Legend label="Selected" color={selectedColor} />
    </Flexbox>
  )
}

export default SeatLegends
