import React, { useMemo } from 'react'

import { SectionProps } from './Section.interface'

const Section: React.FC<SectionProps> = ({
  children,
  rounded = false,
  className = ''
}) => {
  const elementClassname = useMemo(() => {
    const baseClasses = 'p-6 bg-[#FEF9F3]'
    const roundedClasses = rounded ? 'rounded-md' : ''
    return `${baseClasses} ${roundedClasses} ${className}`.trim()
  }, [className, rounded])

  return <div className={elementClassname}>{children}</div>
}

export default Section
