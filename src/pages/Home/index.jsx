/* eslint-disable react-hooks/exhaustive-deps */
import { WeatherInfo, ListSelectedDevices, Filter, AbsoluteLoading } from '@components';
import { useAuth } from '@contexts';
import { useAxios, useLoader } from '@hooks';
import { useState, useEffect } from 'react';
import { Container, FilterContainer, Footer, Group } from './styles';

export const Home = () => {
  const { getDevices, allDevices, devices } = useAuth();
  const [filtered, setFiltered] = useState();
  const [locations, setLocations] = useState([]);
  const { axiosGetLocations } = useAxios();
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    axiosGetLocations().then((res) => setLocations(res));
  }, []);
  const { isLoading, loadsFor1second } = useLoader();

  useEffect(() => {
    loadsFor1second();
  }, []);

  function handleSection(clickedSection) {
    if (clickedSection === activeSection) {
      setActiveSection(null);
    } else {
      const filteredProducts = allDevices.filter(
        (device) => device.local.description === clickedSection
      );
      setFiltered(filteredProducts);
      setActiveSection(clickedSection);
    }
  }

  useEffect(() => {
    getDevices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices]);

  return isLoading ? (
    <AbsoluteLoading />
  ) : (
    <Container>
      <WeatherInfo />
      <FilterContainer>
        <Filter
          section={activeSection === null ? 'Todos' : activeSection}
          key={'all'}
          local={'Todos'}
          handleFilter={() => handleSection(null)}
        />
        {locations.map((local) => {
          return (
            <Filter
              section={activeSection}
              key={local._id}
              local={local.description}
              handleFilter={() => handleSection(local.description)}
            />
          );
        })}
      </FilterContainer>
      {activeSection === null ? (
        <Group>
          <ListSelectedDevices products={allDevices} />
        </Group>
      ) : (
        <Group>
          <ListSelectedDevices products={filtered} />
        </Group>
      )}
      <Footer />
    </Container>
  );
};
