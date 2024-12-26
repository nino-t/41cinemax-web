import React from 'react'

import Flexbox from '@/components/atoms/Flexbox'
import Text from '@/components/atoms/Text'

const MovieTextInfo: React.FC<{
  label: string
  value: string
}> = ({ label, value }) => {
  return (
    <Flexbox gap={1} direction="col" className="w-full">
      <Text size="xs" weight="bold">
        {label}
      </Text>
      <Text size="xs">{value}</Text>
    </Flexbox>
  )
}

export default MovieTextInfo
