/* eslint-disable react-hooks/exhaustive-deps */
import { AbsoluteLoading, Button, Icon, WhiteLayer } from '@components';
import { useAxios, useLoader } from '@hooks';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from './styles';
export const DeviceDetails = ({ product }) => {
  const { axiosUpdateDeviceStatus, axiosDeleteUserDevice } = useAxios();
  const [status, setStatus] = useState(true);
  const { loadsFor2seconds, loadsFor1second, isLoading } = useLoader();
  useEffect(() => {
    if (product.is_on) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);

  const navigate = useNavigate();

  const deleteDevice = () => {
    const confirmed = confirm(
      `Tem certeza que deseja remover ${product.device.name} dos seus dispositivos?`
    );
    if (confirmed) {
      axiosDeleteUserDevice(product._id);
      loadsFor1second();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  useEffect(() => loadsFor2seconds(), [status]);

  return (
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
        {isLoading && <AbsoluteLoading />}
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
            <span>(GMT-3)</span>
          </p>
          <p>
            Força do sinal: <span>{product.device.info.signal}</span>
          </p>
        </aside>
        <Button title="Remover" func={deleteDevice} />
      </Container>
    </WhiteLayer>
  );
};

DeviceDetails.propTypes = {
  product: PropTypes.shape({
    room: PropTypes.string,
    is_on: PropTypes.bool,
    _id: PropTypes.string,
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
