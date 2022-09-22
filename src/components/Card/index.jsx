import { Icon, WhiteLayer } from '@components';
import PropTypes from 'prop-types';
import { Container, List } from './styles';

export const Card = ({ product, isSelected, onSelect }) => {
  return (
    <List>
      <Container>
        <img src={product.device.photoUrl} alt="IOT device" />
        <div>
          <h5>{product.device.name}</h5>
          <div>
            <p>{`${product.local.description} | ${product.room} | ${isSelected ? 'ON' : 'OFF'}`}</p>
          </div>
        </div>
        <Icon handleSwitch={onSelect} selected={isSelected} />
      </Container>
    </List>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    local: PropTypes.shape({
      description: PropTypes.string
    }),
    room: PropTypes.string,
    status: PropTypes.string,
    device: PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  }),
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};
