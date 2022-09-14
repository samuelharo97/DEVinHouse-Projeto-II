import { Button, WhiteLayer } from '@components'
import PropTypes from 'prop-types'
import { Card, Container } from './styles'

export const AddDeviceCard = ({ device, handleAdd }) => {
  return (
    <Container>
      <WhiteLayer>
        <Card>
          <img src={device.photoUrl} alt="" />
          <h4>{device.name}</h4>
          <Button title={'ADICIONAR'} color="primary" func={handleAdd} />
        </Card>
      </WhiteLayer>
    </Container>
  )
}

AddDeviceCard.propTypes = {
  device: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  handleAdd: PropTypes.func.isRequired
}
