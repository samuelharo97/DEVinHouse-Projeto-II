import { AbsoluteLoading, Icon, WhiteLayer } from '@components';
import { useAxios, useLoader } from '@hooks';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';
export const DeviceDetails = ({ product, func }) => {
  const { axiosUpdateDeviceStatus } = useAxios();
  const [status, setStatus] = useState(true);
  const { loadsFor2seconds, isLoading } = useLoader();

  useEffect(() => {
    if (product.is_on) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);

  useEffect(() => loadsFor2seconds(), [status]);

  return isLoading ? (
    <AbsoluteLoading />
  ) : (
    <WhiteLayer>
      <Container>
        <h3>{product.device.name}</h3>
        <span>{product.device.madeBy}</span>
        <img src={product.device.photoUrl} alt={`${product.device.name}`} />
        <p>Dispositivo {status ? 'Ligado' : 'Desligado'}</p>{' '}
        <Icon
          handleSwitch={() =>
            axiosUpdateDeviceStatus(product)
              .then((res) => {
                toast.success('Status atualizado com sucesso');
                setStatus((prev) => {
                  return !prev;
                });
              })
              .catch((err) => {
                console.error(err);
                toast.error('Falha na atualização');
              })
          }
          selected={status}
        />
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
  func: PropTypes.func,
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
