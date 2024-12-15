import React from 'react'

import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { CinemaTimeProps } from './CinemaTime.interface'

const CinemaTime: React.FC<CinemaTimeProps> = ({
  value,
  times,
  className,
  onChange
}) => {
  const handleSelect = (time: string) => {
    onChange(time)
  }

  return (
    <div className={className}>
      <Text className="mb-2">Show Time</Text>
      <Flexbox
        direction="row"
        gap={4}
        className="border py-2 px-4 border-l-0 border-r-0"
      >
        {times.map((time, index) => {
          const selected = value === time.value
          return (
            <Flexbox
              key={index}
              direction="col"
              align="center"
              gap={1}
              className="cursor-pointer"
              onClick={() => handleSelect(time.value)}
            >
              <Text size="xs">{time.label}</Text>
              <Text
                size="xs"
                className={`px-1 ${selected ? 'text-white bg-yellow-600' : ''}`}
              >
                {time.value}
              </Text>
            </Flexbox>
          )
        })}
      </Flexbox>
    </div>
  )
}

export default CinemaTime
