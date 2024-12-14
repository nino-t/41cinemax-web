import React, { useMemo } from 'react'

import { FlexboxProps } from './Flexbox.interface'

const Flexbox: React.FC<FlexboxProps> = ({
  children,
  type = 'flex',
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
      type,
      `flex-${direction}`,
      `justify-${justify}`,
      `items-${align}`,
      `flex-${wrap}`,
      gap > 0 ? `gap-${gap}` : '',
      className
    ]
      .filter(Boolean)
      .join(' ')
  }, [type, direction, justify, align, wrap, gap, className])

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  )
}

export default Flexbox
