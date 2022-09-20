import { WeatherInfo, ListSelectedDevices, WhiteLayer } from '@components';
import { useAxios } from '@hooks';
import { useEffect, useState } from 'react';
import { Container, Filter, Footer, Loading } from './styles';

export const Home = () => {
  const { axiosGetUserDevices } = useAxios();
  const [allDevices, setAllDevices] = useState([]);

  useEffect(() => {
    axiosGetUserDevices().then((res) => setAllDevices(res.data));
  }, []);

  console.log(allDevices);

  return (
    <Container>
      <WeatherInfo />
      <Filter />
      {allDevices.length > 0 ? (
        <ListSelectedDevices products={allDevices} />
      ) : (
        <WhiteLayer>
          <Loading>
            <h3> Adicione algum dispositivo </h3>
          </Loading>
        </WhiteLayer>
      )}
      <Footer />
    </Container>
  );
};
