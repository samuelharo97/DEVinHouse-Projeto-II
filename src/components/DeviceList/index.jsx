import { AddDeviceCard } from '@components'
import { Container, List } from './styles'
import products from '../../services/products.json'

export const DeviceList = () => {
  return (
    <Container>
      <List>
        {products.map(product => (
          <AddDeviceCard key={product._id} device={product} />
        ))}
      </List>
    </Container>
  )
}
