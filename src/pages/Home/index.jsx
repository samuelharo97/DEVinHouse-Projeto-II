import { WeatherInfo, ListSelectedDevices, Loading, FilterSections } from '@components';
import { useAuth } from '@contexts';
import { useEffect } from 'react';
import { Container, Footer, List } from './styles';

export const Home = () => {
  const { getDevices, allDevices, devices } = useAuth();

  useEffect(() => {
    console.log('este useEffect renderizou');
    getDevices();
  }, [devices]);

  return (
    <Container>
      <WeatherInfo />
      <FilterSections />
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
