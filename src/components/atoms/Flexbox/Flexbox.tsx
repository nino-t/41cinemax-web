import React, { useMemo } from 'react'

import { FlexboxProps } from './Flexbox.interface'

const Flexbox: React.FC<FlexboxProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = 'nowrap',
  gap = 0,
  className = '',
  ...props
}) => {
  const flexClasses = useMemo(() => {
    return [
      'flex',
      `flex-${direction}`,
      `justify-${justify}`,
      `items-${align}`,
      `flex-${wrap}`,
      gap > 0 ? `gap-${gap}` : '',
      className
    ]
      .filter(Boolean)
      .join(' ')
  }, [direction, justify, align, wrap, gap, className])

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  )
}

export default Flexbox
