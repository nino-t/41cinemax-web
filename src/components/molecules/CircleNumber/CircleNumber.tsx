import React from 'react'

import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'

const CircleNumber: React.FC<{ number: number }> = ({ number }) => (
  <Flexbox
    align="center"
    justify="center"
    className="w-[24px] h-[24px] bg-[#504B4B] rounded-full"
  >
    <Text color="white">{number}</Text>
  </Flexbox>
)

export default CircleNumber
