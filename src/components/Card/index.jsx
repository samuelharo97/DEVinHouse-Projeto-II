import { Icon, WhiteLayer } from '@components'
import PropTypes from 'prop-types'
import { Container } from './styles'

export const Card = ({ device, isSelected = false, onSelect }) => {
  return (
    <WhiteLayer pad="20px">
      <Container>
        <img src={device.photoUrl} alt="IOT device" />
        <div>
          <h5>{device.name}</h5>
          <div>
            <p>{`${device.location} | ${device.room} | ${
              isSelected ? 'ON' : 'OFF'
            }`}</p>
          </div>
        </div>
        <Icon handleSwitch={onSelect} selected={isSelected} />
      </Container>
    </WhiteLayer>
  )
}

Card.propTypes = {
  device: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    location: PropTypes.string,
    room: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string.isRequired
  }),
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
}
