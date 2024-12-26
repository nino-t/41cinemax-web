import React from 'react'
import Text from '@/components/atoms/Text'
import Flexbox from '@/components/atoms/Flexbox'

interface Props {
  releaseDate: string
  genres: string[]
  director: string
  duration: number
  country: string
}

const MetaInfo: React.FC<Props> = ({
  releaseDate,
  genres,
  director,
  duration,
  country
}) => {
  const renderValue = (label: string, value: string | number) => {
    return (
      <Flexbox gap={2} direction="row" align="center" className="w-1/2 mb">
        <Text className="w-[60px]">{label}</Text>
        <Text>:</Text>
        <Text>{value}</Text>
      </Flexbox>
    )
  }

  return (
    <Flexbox direction="col" gap={2} className="mb-6">
      {renderValue('Release', releaseDate)}
      {renderValue('Genre', genres.join(', '))}
      {renderValue('Director', director)}
      {renderValue('Duration', `${duration} minute`)}
      {renderValue('country', country)}
    </Flexbox>
  )
}

export default MetaInfo
