import { useEffect, useMemo, useState } from 'react'
import dayjs from 'dayjs'
import groupBy from 'lodash/groupBy'
import { useQuery } from 'react-query'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { DBSchema } from '@/__mocks__/db'
import Breadcrumb from '@/components/molecules/Breadcrumb'
import Section from '@/components/atoms/Section'
import Seats from '@/components/organisms/Seats'
import { generateSeats } from '@/utils/seat-utils'
import { getMockMovieSchedule, getMockScheduleBookedSeat } from '@/__mocks__'
import LayoutBooking from './components/LayoutBooking'
import Button from '@/components/atoms/Button'
import Flexbox from '@/components/atoms/Flexbox'
import CinemaDate from '@/components/organisms/CinemaDate'
import CinemaTime from '@/components/organisms/CinemaTime'
import BookingConfirmation from './components/BookingConfirmation'
import { useAuth } from '@/hooks/useAuth'
import useSnakebarState from '@/hooks/useSnakebarState'

const sampleSeats = generateSeats({
  rowCount: 6,
  columnCount: 16,
  reservedSeats: []
})

const BookingPage = () => {
  const navigate = useNavigate()
  const { movieId } = useParams()
  const { isAuthenticated } = useAuth()
  const { openSnakebar } = useSnakebarState()
  const [searchParams] = useSearchParams()
  const [movie, setMovie] = useState<DBSchema['movies'][0]>()
  const [selectedDate, setSelectedDate] = useState<string>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [stateSeats, setStateSeats] = useState(() => sampleSeats)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    // Redirect ke halaman login jika user belum login
    if (!isAuthenticated) {
      navigate('/login', { replace: true })
      openSnakebar('You need to login first to access this page', 'error')
    }
  }, [isAuthenticated, navigate, openSnakebar])

  // Ambil schedule 6 hari dari sekarang
  const { data: dataSchedule } = useQuery(['movie', movieId, 'schedules'], () =>
    getMockMovieSchedule(Number(movieId), {
      start: dayjs().format('YYYY-MM-DD'),
      end: dayjs().add(6, 'day').format('YYYY-MM-DD')
    })
  )
  const schedules = useMemo(() => dataSchedule?.data, [dataSchedule])

  // Ambil datetime dari query string
  const qsDatetime = searchParams.get('datetime')
  useEffect(() => {
    if (qsDatetime) {
      const [date, time] = qsDatetime.split(' ')
      setSelectedDate(date)
      setSelectedTime(time)
      return
    }

    // Set tanggal pertama sebagai default selected date
    setSelectedDate(schedules?.[0].date)
    setSelectedTime(schedules?.[0].time)
  }, [qsDatetime, schedules])

  const selectedSchedule = useMemo(() => {
    return schedules?.find(
      (schedule) =>
        schedule.date === selectedDate && schedule.time === selectedTime
    )
  }, [schedules, selectedDate, selectedTime])

  // Ambil booked seat dari schedule yang dipilih
  const { data: dataBookedSeat } = useQuery(
    ['movie-schedules', selectedSchedule?.id, 'seats-booked'],
    () => getMockScheduleBookedSeat(selectedSchedule?.id || 0)
  )
  const bookedSeats = useMemo(
    () => dataBookedSeat?.data || [],
    [dataBookedSeat]
  )

  // Update status reserved pada seat yang sudah dibooking
  useEffect(() => {
    const updatedSeats = stateSeats.map((seat) => {
      if (bookedSeats.includes(seat.id)) {
        return { ...seat, selected: false, reserved: true }
      }
      return seat
    })
    setStateSeats(updatedSeats)
  }, [bookedSeats])

  // Update status selected pada seat yang dipilih
  const updateSeatStatus = (seatId: string, selected: boolean) => {
    const updatedSeats = stateSeats.map((seat) => {
      if (seat.id === seatId) {
        return { ...seat, selected }
      }
      return seat
    })
    setStateSeats(updatedSeats)
  }

  // Kelompokkan schedule berdasarkan tanggal
  const groupSchedulesByDate = useMemo(() => {
    return groupBy(schedules, 'date')
  }, [schedules])

  // Ambil kursi yang dipilih
  const selectedSeats = stateSeats
    .filter(({ selected }) => selected)
    .map(({ id }) => id)

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: movie?.title || '', to: `/movie/${movie?.id}` },
          { label: 'Booking' }
        ]}
        className="mb-2"
      />
      <Section>
        <LayoutBooking onFetched={setMovie}>
          <Flexbox gap={16} justify="between" className="mb-8">
            <CinemaDate
              className="w-[calc(60%-4rem)]"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            <CinemaTime
              className="w-[40%]"
              value={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              times={
                groupSchedulesByDate?.[selectedDate as string]?.map(
                  ({ time }) => {
                    return {
                      label: '3D',
                      value: time
                    }
                  }
                ) || []
              }
            />
          </Flexbox>

          <Seats
            seats={stateSeats}
            onSeatSelect={({ id, selected }) => {
              updateSeatStatus(id, !selected)
            }}
            maxSelect={6}
            spaceInColumns={[5, 9, 13]}
          />

          <Button
            variant="primary"
            className="mt-10"
            disabled={!stateSeats.find(({ selected }) => selected === true)}
            onClick={() => setShowConfirmation(true)}
            fullWidth
          >
            Buy Tickets
          </Button>
        </LayoutBooking>
      </Section>

      {showConfirmation && (
        <BookingConfirmation
          movieId={movie?.id || 0}
          bookingDateTime={`${selectedDate} ${selectedTime}`}
          seats={selectedSeats}
          onCancel={() => {
            setShowConfirmation(false)
          }}
        />
      )}
    </>
  )
}

export default BookingPage
