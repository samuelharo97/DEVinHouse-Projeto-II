import { DeviceList, Header } from '@components'
import { Container, Footer, Section } from './styles'

export const Devices = () => {
  return (
    <Container>
      <Header />
      <Section>
        <h3> Dispositivos </h3>
      </Section>
      <DeviceList />
      <Footer />
    </Container>
  )
}
