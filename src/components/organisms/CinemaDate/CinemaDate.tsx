import React, { useMemo } from 'react'

import dayjs from 'dayjs'

import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { CinemaDateProps } from './CinemaDate.interface'

const CinemaDate: React.FC<CinemaDateProps> = ({
  value,
  className,
  onChange
}) => {
  const handleSelect = (date: string) => {
    onChange(date)
  }

  const dates = useMemo(() => {
    return [...Array(7)].map((_, index) => {
      const date = dayjs().add(index, 'day')
      return {
        label: date.format('ddd'),
        value: date.format('DD MMM'),
        date: date.format('YYYY-MM-DD')
      }
    })
  }, [])

  return (
    <div className={className}>
      <Text className="mb-2">Show Date</Text>
      <Flexbox
        direction="row"
        gap={4}
        className="border py-2 px-4 border-l-0 border-r-0"
      >
        {dates.map((date, index) => {
          const selected = value === date.date
          return (
            <Flexbox
              key={index}
              align="center"
              direction="col"
              gap={1}
              className="cursor-pointer"
              onClick={() => handleSelect(date.date)}
            >
              <Text size="xs">{date.label}</Text>
              <Text
                size="xs"
                className={`px-1 ${selected ? 'text-white bg-yellow-600' : ''}`}
              >
                {date.value}
              </Text>
            </Flexbox>
          )
        })}
      </Flexbox>
    </div>
  )
}

export default CinemaDate
