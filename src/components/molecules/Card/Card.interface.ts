import React from 'react'

import { TextProps } from '../../atoms/Text/Text.interface'

export interface CardProps {
  /**
   * The main title of the card.
   * @type {string}
   * @required
   * @example "Card Title"
   */
  title: string
  /**
   * An optional element to be placed after the title.
   * @type {React.ReactNode}
   * @optional
   * @example <Icon />
   */
  afterTitle?: React.ReactNode
  /**
   * The text properties for the title.
   * @type {TextProps}
   * @optional
   * @example { size: 'lg', color: 'primary' }
   */
  titleTextProps?: Omit<TextProps, 'children'>
  /**
   * An optional subtitle for the card.
   * @type {string}
   * @optional
   * @example "Card Subtitle"
   */
  subtitle?: string
  /**
   * An optional thumbnail image for the card.
   * @type {string}
   * @example "https://via.placeholder.com/150"
   */
  thumbnail?: string
  /**
   * A boolean to determine if the thumbnail should have a margin.
   * @type {boolean}
   * @optional
   * @default false
   */
  hasMarginThumbnail?: boolean
  /**
   * The children of the card.
   * @type {React.ReactNode}
   * @optional
   */
  children?: React.ReactNode
  /**
   * An optional class name for the card.
   * @type {string}
   * @optional
   * @example "my-custom-class"
   */
  className?: string
}
