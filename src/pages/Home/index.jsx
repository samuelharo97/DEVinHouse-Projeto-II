import { WeatherInfo, ListSelectedDevices, Filter } from '@components';
import { useAuth } from '@contexts';
import { useAxios } from '@hooks';
import { useState, useEffect } from 'react';
import { Container, FilterContainer, Footer, List } from './styles';

export const Home = () => {
  const { getDevices, allDevices, devices } = useAuth();
  const [filtered, setFiltered] = useState();
  const [locations, setLocations] = useState([]);
  const { axiosGetLocations } = useAxios();
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    axiosGetLocations().then((res) => setLocations(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSection(clickedSection) {
    if (clickedSection === activeSection) {
      console.log('state = null');
      setActiveSection(null);
    } else {
      console.log(`state = ${clickedSection}`);
      const filteredProducts = allDevices.filter(
        (device) => device.local.description === clickedSection
      );
      setFiltered(filteredProducts);
      setActiveSection(clickedSection);
    }
  }

  useEffect(() => {
    console.log('este useEffect renderizou');
    getDevices();
  }, [devices]);

  return (
    <Container>
      <WeatherInfo />
      <FilterContainer>
        <Filter active key={'all'} local={'Todos'} handleFilter={() => handleSection(null)} />
        {locations.map((local) => {
          return (
            <Filter
              key={local._id}
              local={local.description}
              handleFilter={() => handleSection(local.description)}
            />
          );
        })}
      </FilterContainer>
      {activeSection === null ? (
        <List>
          <ListSelectedDevices products={allDevices} />
        </List>
      ) : (
        <List>
          <ListSelectedDevices products={filtered} />
        </List>
      )}
      <Footer />
    </Container>
  );
};
