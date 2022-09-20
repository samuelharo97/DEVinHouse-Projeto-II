import { WeatherInfo, ListSelectedDevices, Loading } from '@components';
import { useAxios } from '@hooks';
import { useEffect, useState } from 'react';
import { Container, Filter, Footer, List } from './styles';

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
        <List>
          <ListSelectedDevices products={allDevices} />
        </List>
      ) : (
        <Loading />
      )}
      <Footer />
    </Container>
  );
};
