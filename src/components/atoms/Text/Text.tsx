import React from 'react'

import { TextProps } from './Text.interface'

const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  size = 'sm',
  weight = 'normal',
  color = 'default',
  className = '',
  onClick,
  style = {},
  ...props
}) => {
  const Component = as as keyof JSX.IntrinsicElements

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  }

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  }

  const colorClasses: Record<string, string> = {
    default: 'text-gray-900',
    primary: 'text-yellow-600',
    secondary: 'text-gray-400',
    error: 'text-red-600',
    white: 'text-white'
  }

  const classes = [
    sizeClasses[size],
    weightClasses[weight],
    colorClasses?.[color],
    onClick ? 'cursor-pointer' : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component
      className={classes}
      onClick={onClick}
      style={{
        ...(!colorClasses?.[color]
          ? {
              color
            }
          : {}),
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Text
