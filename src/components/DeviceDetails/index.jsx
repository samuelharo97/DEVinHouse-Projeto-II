import { Icon, WhiteLayer } from '@components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Container } from './styles';
export const DeviceDetails = ({ product }) => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (product.is_on) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);

  return (
    <WhiteLayer>
      <Container>
        <h3>{product.device.name}</h3>
        <span>{product.device.madeBy}</span>
        <img src={product.device.photoUrl} alt={`${product.device.name}`} />
        <p>Dispositivo {status ? 'Ligado' : 'Desligado'}</p> <Icon selected={status} />
        <aside>
          <section>Informações do dispositivo</section>
          <p>
            ID virtual: <span>{product.device.info.virtual_id}</span>
          </p>
          <p>
            Endereço IP: <span>{product.device.info.ip_address}</span>
          </p>
          <p>
            Endereço MAC: <span>{product.device.info.mac_address}</span>
          </p>
          <p>
            Fuso horário:
            <span>Tá de sacanagem</span>
          </p>
          <p>
            Força do sinal: <span>{product.device.info.signal}</span>
          </p>
        </aside>
      </Container>
    </WhiteLayer>
  );
};

DeviceDetails.propTypes = {
  product: PropTypes.shape({
    room: PropTypes.string,
    is_on: PropTypes.bool,
    device: PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      madeBy: PropTypes.string.isRequired,
      info: PropTypes.shape({
        virtual_id: PropTypes.string.isRequired,
        ip_address: PropTypes.string.isRequired,
        signal: PropTypes.string.isRequired,
        mac_address: PropTypes.string.isRequired
      })
    })
  })
};
