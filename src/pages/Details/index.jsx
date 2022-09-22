import { DeviceDetails, Loading } from '@components';
import { useAxios } from '@hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

export const Details = () => {
  const { id } = useParams();
  const [device, setDevice] = useState();
  const [fetched, setFetched] = useState(false);
  const { axiosGetDeviceById } = useAxios();

  useEffect(() => {
    console.log('Fetching device data');
    axiosGetDeviceById(id).then((res) => {
      console.log(res);
      setDevice(res.data);
      setFetched(true);
    });
  }, []);

  return (
    <>
      <Container>{fetched ? <DeviceDetails product={device} /> : <Loading />}</Container>
    </>
  );
};
