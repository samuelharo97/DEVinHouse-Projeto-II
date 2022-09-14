import { Header, WeatherInfo, ListSelectedDevices } from '@components'
import { Container, Filter, Footer } from './styles'
import produtos from '../../services/products.json'

export const Home = () => {
  const devices = Array(produtos)
  console.log(devices)

  return (
    <Container>
      <Header />
      <WeatherInfo />
      <Filter />
      <ListSelectedDevices products={produtos} />
      <Footer />
    </Container>
  )
}
