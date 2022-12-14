import PropTypes from 'prop-types';
import { Container } from './styles';
export const Icon = ({ selected = false, handleSwitch }) => {
  return (
    <Container
      onClick={handleSwitch}
      variant={selected}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.833" cy="18" r="17.5" />
      <line x1="17.833" y1="14" x2="17.833" y2="18" stroke="white" />
      <line x1="14.333" y1="15.5" x2="16.333" y2="15.5" stroke="white" />
      <line x1="19.333" y1="15.5" x2="21.333" y2="15.5" stroke="white" />
      <path d="M14.833 15V21" stroke="white" />
      <line x1="20.833" y1="15" x2="20.833" y2="21" stroke="white" />
      <path d="M14.333 21H21.333" stroke="white" />
    </Container>
  );
};

Icon.propTypes = {
  selected: PropTypes.bool,
  handleSwitch: PropTypes.func
};
