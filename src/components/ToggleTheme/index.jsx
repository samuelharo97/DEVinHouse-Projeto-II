import { MdDarkMode, MdLightMode } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useTheme } from '@contexts';
import { darkTheme, lightTheme } from '@styles';
import { useEffect } from 'react';

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const checkTheme = () => {
    return theme === darkTheme ? 'DARK' : 'LIGHT';
  };

  const currentTheme = useEffect(() => checkTheme(), []);

  const handleToggle = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
      localStorage.setItem('@Theme', JSON.stringify(lightTheme));
    } else {
      setTheme(darkTheme);
      localStorage.setItem('@Theme', JSON.stringify(darkTheme));
    }
  };

  return currentTheme === 'DARK' ? (
    <MdDarkMode onClick={handleToggle} />
  ) : (
    <MdLightMode onClick={handleToggle} />
  );
};

ToggleTheme.propTypes = {
  theme: PropTypes.bool
};
