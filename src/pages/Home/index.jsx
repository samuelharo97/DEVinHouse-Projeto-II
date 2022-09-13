import { Header, WeatherInfo, ListCards } from '@components'
import { Container, Filter } from './styles'
import produtos from '../../services/products.json'

export const Home = () => {
  const devices = Array(produtos)
  console.log(devices)

  return (
    <Container>
      <Header />
      <WeatherInfo />
      <Filter />
      <ListCards products={produtos} />
    </Container>
  )
}
