import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { Ticket } from 'lucide-react'
import Flexbox from '@/components/atoms/Flexbox'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import ScheduleTimeItem from './ScheduleTimeItem'
import ScheduleDateItem from './ScheduleDateItem'
import { useQuery } from 'react-query'
import { getMockMovieSchedule } from '@/__mocks__'
import groupBy from 'lodash/groupBy'

const MovieSchedules: React.FC<{ movieId: number }> = ({ movieId }) => {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState<string>()
  const [selectedTime, setSelectedTime] = useState<string>()

  // Ambil schedule 6 hari dari sekarang
  const { data } = useQuery(['movie', movieId, 'schedules'], () =>
    getMockMovieSchedule(movieId, {
      start: dayjs().format('YYYY-MM-DD'),
      end: dayjs().add(6, 'day').format('YYYY-MM-DD')
    })
  )
  const schedules = useMemo(() => data?.data, [data])

  // Set tanggal pertama sebagai default selected date
  useEffect(() => {
    setSelectedDate(schedules?.[0].date)
  }, [schedules])

  // Kelompokkan schedule berdasarkan tanggal
  const groupSchedulesByDate = useMemo(() => {
    return groupBy(schedules, 'date')
  }, [schedules])

  return (
    <>
      <Flexbox direction="col" gap={1}>
        <Text size="lg" color="primary" weight="medium">
          Schedule
        </Text>
        <Flexbox gap={2} className="mb-4">
          {Object.keys(groupSchedulesByDate)?.map((_, index) => {
            const date = dayjs().add(index, 'day')
            return (
              <ScheduleDateItem
                key={index}
                date={date}
                selected={selectedDate === date.format('YYYY-MM-DD')}
                onClick={() => {
                  setSelectedDate(date.format('YYYY-MM-DD'))
                  setSelectedTime(undefined)
                }}
              />
            )
          })}
        </Flexbox>
        <Flexbox gap={4}>
          {groupSchedulesByDate?.[selectedDate || '']?.map(
            ({ time }, index) => (
              <ScheduleTimeItem
                key={index}
                time={time}
                selected={selectedTime === time}
                onClick={() => setSelectedTime(time)}
              />
            )
          )}
        </Flexbox>
      </Flexbox>
      <Button
        icon={<Ticket />}
        variant="primary"
        className="mt-10 float-right"
        disabled={!selectedDate || !selectedTime}
        onClick={() => {
          navigate(
            `/movie/${movieId}/booking?datetime=${selectedDate} ${selectedTime}`
          )
        }}
      >
        Get Tickets
      </Button>
    </>
  )
}

export default MovieSchedules
