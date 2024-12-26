import React from 'react'
import Text from '@/components/atoms/Text'

interface Props {
  time: string
  selected?: boolean
  onClick?: () => void
}

const ScheduleTimeItem: React.FC<Props> = ({
  time,
  selected = false,
  onClick
}) => {
  const textColor = selected ? 'text-white' : '!text-[#EEBD79]'
  const backgroundColor = selected ? 'bg-[#EEBD79]' : 'bg-[#F1E8DC]'
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer py-1 px-6 text-center rounded-2xl ${backgroundColor}`}
    >
      <Text size="xs" className={textColor}>
        {time}
      </Text>
    </div>
  )
}

export default ScheduleTimeItem
