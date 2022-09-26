import { Icon } from '@components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Container, InfoIcon, List } from './styles';
import { FaInfoCircle } from 'react-icons/fa';
import { useAxios } from '@hooks';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export const Card = ({ product, isSelected }) => {
  const { axiosUpdateDeviceStatus } = useAxios();
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  const updateStatus = () =>
    axiosUpdateDeviceStatus(product)
      .then((res) => {
        toast.success(`${product.device.name} foi ${!status ? 'ligado' : 'desligado'} com sucesso`);
        setStatus((prev) => {
          return !prev;
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error('Falha na atualização');
      });

  const checkStatus = () => {
    if (product.is_on) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  useEffect(() => {
    checkStatus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List>
      <Container>
        <img src={product.device.photoUrl} alt="IOT device" />
        <div>
          <h5>{product.device.name}</h5>
          <div>
            <p>{`${product.local.description} | ${product.room} | ${isSelected ? 'ON' : 'OFF'}`}</p>
          </div>
          <InfoIcon>
            <FaInfoCircle onClick={() => navigate(`details/${product._id}`)} />
          </InfoIcon>
        </div>
  
        <Icon handleSwitch={() => updateStatus()} selected={status} />
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
    _id: PropTypes.string,
    is_on: PropTypes.bool,
    device: PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  }),
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func
};
