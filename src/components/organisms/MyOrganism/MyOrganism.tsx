import { MyOrganismProps } from './MyOrganism.interface'
import { Container, Title, Grid } from './MyOrganism.styled'
import MyMolecule from '@/components/molecules/MyMolecule'

const MyOrganism = ({
  title,
  items,
  buttonVariant = 'primary'
}: MyOrganismProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {items.map((item, index) => (
          <MyMolecule key={index} {...item} buttonVariant={buttonVariant} />
        ))}
      </Grid>
    </Container>
  )
}

export default MyOrganism
