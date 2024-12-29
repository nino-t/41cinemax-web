import React from 'react'
import dayjs from 'dayjs'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getMockPreviewBooking, postMockBookSeat } from '@/__mocks__'
import imageMoneyTransfer from '@/assets/money-transfer.png'
import Button from '@/components/atoms/Button'
import Divider from '@/components/atoms/Divider'
import Flexbox from '@/components/atoms/Flexbox'
import Text from '@/components/atoms/Text'
import Modal from '@/components/molecules/Modal'
import useSnakebarState from '@/hooks/useSnakebarState'
import FieldText from './FieldText'
import { useAuth } from '@/hooks/useAuth'

const formatDate = (dateString: string) => {
  return dayjs(dateString, 'YYYY-MM-DDD').format('DD MMMM YYYY')
}

const formatIDRCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(amount)
}

interface Props {
  movieId: number
  bookingDateTime: string
  seats: string[]
  onCancel: () => void
}

const BookingConfirmation: React.FC<Props> = ({
  movieId,
  bookingDateTime,
  seats,
  onCancel
}) => {
  const { user } = useAuth()
  const queryClient = useQueryClient()
  const { openSnakebar } = useSnakebarState()
  const params = {
    movieId,
    seats,
    datetime: bookingDateTime
  }

  // Mengambil data preview booking berdasarkan parameter yang diberikan
  const { data: previewResp } = useQuery(['booking-preview', params], () =>
    getMockPreviewBooking(movieId, {
      seats: params.seats,
      datetime: params.datetime
    })
  )
  const preview = previewResp?.data

  // Mutasi untuk melakukan booking kursi
  const { mutate: booking, isLoading: isLoadingBooking } =
    useMutation(postMockBookSeat)

  // Fungsi untuk melakukan booking kursi
  const confirmBooking = () => {
    if (!preview) return
    booking(
      {
        movie_id: preview.movie_id,
        user_id: user?.id || 0,
        schedule_id: preview.schedule_id,
        seat_numbers: preview.seats,
        total_price: preview.total_amount
      },
      {
        onSuccess: () => {
          // Tampilkan snackbar ketika booking berhasil & tutup modal
          queryClient.invalidateQueries('movie-schedules')
          openSnakebar('Successfully to book ticket!', 'success')
          onCancel()
        }
      }
    )
  }

  return (
    <Modal
      isOpen
      title={preview?.movie_title}
      onCancel={onCancel}
      footer={
        <Button
          variant="primary"
          onClick={confirmBooking}
          loading={isLoadingBooking}
          fullWidth
        >
          Pay {formatIDRCurrency(preview?.total_amount || 0)}
        </Button>
      }
    >
      <Flexbox gap={4} justify="between">
        <FieldText label="Date" value={`${formatDate(preview?.date || '')}`} />
        <FieldText label="Time" value={`${preview?.hour || '00:00'}`} />
      </Flexbox>

      <FieldText label="Seats" value={`${preview?.seats.join(', ')}`} />

      <FieldText
        label="Payment Method"
        value={
          <Flexbox
            align="center"
            gap={2}
            className="p-3 border rounded-lg w-full"
          >
            <img
              src={imageMoneyTransfer}
              alt="Transfer Bank"
              className="w-6 h-6"
            />
            <Text>Transfer Bank</Text>
          </Flexbox>
        }
      />

      <Flexbox direction="col" gap={2}>
        <FieldText
          flexDirection="row"
          label="Ticket Purchase"
          value={`${formatIDRCurrency(preview?.ticket_price || 0)} x ${preview?.seats.length}`}
        />
        <FieldText
          flexDirection="row"
          label="Admin Fee"
          value={`${formatIDRCurrency(preview?.admin_fee || 0)}`}
        />
        <Divider />
        <FieldText
          flexDirection="row"
          label="Total Pay"
          value={`${formatIDRCurrency(preview?.total_amount || 0)}`}
        />
      </Flexbox>
    </Modal>
  )
}

export default BookingConfirmation
