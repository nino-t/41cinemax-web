import React from 'react'

import { Star } from 'lucide-react'

import Text from '../../atoms/Text'
import { RatingProps } from './Rating.interface'
import Flexbox from '@/components/atoms/Flexbox'

const Rating: React.FC<RatingProps> = ({ rating, className = '' }) => {
  return (
    <Flexbox
      type="inline-flex"
      align="center"
      className={`bg-yellow-100 rounded-full py-1 px-2 ${className}`}
    >
      <Star className="text-yellow-500 w-3 h-3 mr-1" fill="currentColor" />
      <Text as="span" color="primary" weight="semibold" size="xs">
        {rating.toFixed(1)}
      </Text>
    </Flexbox>
  )
}

export default Rating
