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
    axiosGetDeviceById(id).then((res) => {
      setDevice(res.data);
      setFetched(true);
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const loadsFor3seconds = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>{fetched ? <DeviceDetails product={device} /> : <Loading />}</Container>
  );
};
