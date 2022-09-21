import { Card } from '@components';
import { useAxios } from '@hooks';
import PropTypes from 'prop-types';
/* import { useEffect } from 'react';
 */import { Container, List } from './styles';

export const ListSelectedDevices = ({ products }) => {
  const { axiosUpdateDeviceStatus } = useAxios();

  return (
    <Container>
      <List>
        {products.map((product) => (
          <Card
            key={product._id}
            product={product}
            isSelected={product.is_on}
            onSelect={() => axiosUpdateDeviceStatus(product)}
          />
        ))}
      </List>
    </Container>
  );
};

ListSelectedDevices.propTypes = {
  products: PropTypes.array.isRequired
};
