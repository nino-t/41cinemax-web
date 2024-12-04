import { MyAtomProps } from './MyAtom.interface'
import { StyledMyAtom } from './MyAtom.styled'

const MyAtom = ({ text, variant = 'primary', onClick }: MyAtomProps) => {
  return (
    <StyledMyAtom variant={variant} onClick={onClick}>
      {text}
    </StyledMyAtom>
  )
}

export default MyAtom
