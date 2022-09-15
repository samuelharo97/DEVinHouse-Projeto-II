import { DeviceList } from '@components'
import { Container, Footer, Section } from './styles'

export const Devices = () => {
  return (
    <Container>
      <Section>
        <h3> Dispositivos </h3>
      </Section>
      <DeviceList />
      <Footer />
    </Container>
  )
}
