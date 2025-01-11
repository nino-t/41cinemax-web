import React, { useMemo } from 'react'
import Text from '../../atoms/Text'
import { TextAnchorProps } from './TextAnchor.interface'

const TextAnchor: React.FC<TextAnchorProps> = ({
  children,
  onClick,
  className = '',
  ...props
}) => {
  const elementClassname = useMemo(() => {
    const baseClasses =
      'cursor-pointer text-indigo-600 hover:text-indigo-500 hover:underline'

    return `${baseClasses} ${className}`.trim()
  }, [className])

  return (
    <Text
      as="span"
      weight="medium"
      {...props}
      className={elementClassname}
      onClick={onClick}
    >
      {children}
    </Text>
  )
}

export default TextAnchor
