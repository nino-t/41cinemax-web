import React from 'react'

import { Star } from 'lucide-react'

import Text from '../../atoms/Text'
import { RatingProps } from './Rating.interface'

const Rating: React.FC<RatingProps> = ({ rating, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center bg-yellow-100 rounded-full py-1 px-2 ${className}`}
    >
      <Star className="text-yellow-500 w-3 h-3 mr-1" fill="currentColor" />
      <Text as="span" color="primary" weight="semibold" size="xs">
        {rating.toFixed(1)}
      </Text>
    </div>
  )
}

export default Rating
