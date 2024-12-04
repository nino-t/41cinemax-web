import styled from 'styled-components'
import { MyMoleculeProps } from './MyMolecule.interface'

export const StyledMyMolecule = styled.div<
  Pick<MyMoleculeProps, 'backgroundColor'>
>`
  padding: 16px;
  border-radius: 8px;

  ${({ backgroundColor = 'clauds' }) => ({
    backgroundColor: backgroundColor === 'clauds' ? '#ecf0f1' : '#dfe6e9',
    color: '#34495e'
  })}
`

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 1.2rem;
`

export const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
`
