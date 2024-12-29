import React from 'react'
import Text from '@/components/atoms/Text'
import Flexbox from '@/components/atoms/Flexbox'
import { TextProps } from '@/components/atoms/Text/Text.interface'

interface Props {
  label: string
  value: React.ReactNode
  flexDirection?: 'col' | 'row'
  labelProps?: Omit<TextProps, 'children'>
  valueProps?: Omit<TextProps, 'children'>
}

const FieldText: React.FC<Props> = ({
  label,
  value,
  flexDirection = 'col',
  labelProps = {},
  valueProps = {}
}) => (
  <Flexbox
    gap={1}
    direction={flexDirection}
    justify="between"
    className="w-full"
  >
    <Text color="secondary" {...labelProps}>
      {label}
    </Text>

    {typeof value === 'string' ? <Text {...valueProps}>{value}</Text> : value}
  </Flexbox>
)

export default FieldText
