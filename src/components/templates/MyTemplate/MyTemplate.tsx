import { MyTemplateProps } from './MyTemplate.interface'
import { Container, Header } from './MyTemplate.styled'
import MyOrganism from '@/components/organisms/MyOrganism'

const MyTemplate = ({ pageTitle, sections }: MyTemplateProps) => (
  <Container>
    <Header>
      <h1>{pageTitle}</h1>
    </Header>
    {sections.map((section, index) => (
      <MyOrganism key={index} {...section} />
    ))}
  </Container>
)

export default MyTemplate
