import { MyMoleculeProps } from './MyMolecule.interface'
import { StyledMyMolecule, Title, Description } from './MyMolecule.styled'
import MyAtom from '@/components/atoms/MyAtom'

const MyMolecule = ({
  title,
  description,
  backgroundColor = 'clauds',
  buttonVariant = 'primary'
}: MyMoleculeProps) => {
  return (
    <StyledMyMolecule backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      <div className="mb-4" />
      <MyAtom text="Click me" variant={buttonVariant} />
    </StyledMyMolecule>
  )
}

export default MyMolecule
