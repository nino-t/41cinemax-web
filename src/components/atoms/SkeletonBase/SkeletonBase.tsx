import React from 'react'

const SkeletonBase: React.FC<{ className?: string }> = ({
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-gray-200 rounded animate-pulse ${className}`}
      {...props}
    />
  )
}

export default SkeletonBase
