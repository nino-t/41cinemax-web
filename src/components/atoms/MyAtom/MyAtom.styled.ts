import styled from 'styled-components'
import { MyAtomProps } from './MyAtom.interface'

export const StyledMyAtom = styled.div<Pick<MyAtomProps, 'variant'>>`
  padding: 8px 16px;
  border-radius: 4px;

  ${({ variant = 'primary' }) => ({
    backgroundColor: variant === 'primary' ? '#e74c3c' : '#34495e',
    color: '#ffffff'
  })}
`
