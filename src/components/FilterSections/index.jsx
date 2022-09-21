import { Filter } from '@components';
import { useAxios } from '@hooks';
import { useEffect, useState } from 'react';
import { FilterContainer } from './styles';

export const FilterSections = () => {
  const [locations, setLocations] = useState([]);
  const { axiosGetLocations } = useAxios();

  useEffect(() => {
    axiosGetLocations().then((res) => setLocations(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [activeSection, setActiveSection] = useState(null);
  function handleSection(clickedSection) {
    if (clickedSection === activeSection) {
      console.log('state = null');
      setActiveSection(null);
    } else {
      console.log(`state = ${clickedSection}`);
      setActiveSection(clickedSection);
    }
  }

  return (
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
  );
};
