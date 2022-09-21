import PropTypes from 'prop-types';
import { FilterBtn } from './styles';

export const Filter = ({ local, handleFilter, active = false }) => {
  return (
    <FilterBtn active={active} onClick={handleFilter}>
      {local}
    </FilterBtn>
  );
};

Filter.propTypes = {
  local: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  active: PropTypes.bool
};
