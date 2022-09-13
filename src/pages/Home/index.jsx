import { Form, Header, WeatherInfo } from '@components'
import { Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <Header />
      <WeatherInfo />
    </Container>
  )
}
