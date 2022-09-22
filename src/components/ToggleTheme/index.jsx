import { MdDarkMode, MdLightMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useTheme } from '@contexts';
import { darkTheme, lightTheme } from '@styles';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  return theme === darkTheme ? (
    <MdDarkMode onClick={handleToggle} />
  ) : (
    <MdLightMode onClick={handleToggle} />
  );
};

ToggleTheme.propTypes = {
  theme: PropTypes.bool
};
