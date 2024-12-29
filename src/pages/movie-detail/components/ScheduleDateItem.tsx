import React from 'react'
import { Dayjs } from 'dayjs'
import Flexbox from '@/components/atoms/Flexbox'
import Text from '@/components/atoms/Text'

interface Props {
  date: Dayjs
  selected?: boolean
  onClick?: () => void
}

const ScheduleDateItem: React.FC<Props> = ({ date, selected, onClick }) => {
  const textColor = selected ? 'text-white' : '!text-[#EEBD79]'
  const backgroundColor = selected ? 'bg-[#EEBD79]' : 'bg-[#F1E8DC]'

  const dateMonth = date.format('MMMM') // Nama bulan
  const dateNumber = date.format('DD') // Nomor tanggal

  return (
    <Flexbox
      gap={1}
      direction="col"
      className="overflow-hidden rounded-[16px] cursor-pointer"
      onClick={onClick}
    >
      <div className={`py-1 px-6 w-full text-center ${backgroundColor}`}>
        <Text size="xs" className={textColor}>
          {dateMonth}
        </Text>
      </div>
      <div className={`py-1 px-6 w-full text-center ${backgroundColor}`}>
        <Text size="xs" className={textColor}>
          {dateNumber}
        </Text>
      </div>
    </Flexbox>
  )
}

export default ScheduleDateItem
