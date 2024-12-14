import React from 'react'

import Flexbox from '../../atoms/Flexbox'
import Text from '../../atoms/Text'
import { CardProps } from './Card.interface'

const Card: React.FC<CardProps> = ({
  title,
  titleTextProps = {},
  subtitle,
  thumbnail,
  children,
  className = '',
  hasMarginThumbnail = false,
  afterTitle
}) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${className}`}
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className={`w-full ${hasMarginThumbnail ? 'px-3 pt-3' : ''}`}
        />
      )}
      <div className="px-3 py-3">
        <div>
          <Flexbox justify="between">
            <Text as="h2" weight="bold" {...titleTextProps}>
              {title}
            </Text>
            {afterTitle}
          </Flexbox>
          <Text as="h3">{subtitle}</Text>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Card
