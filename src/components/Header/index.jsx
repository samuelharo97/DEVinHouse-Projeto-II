import { Container, FlexibleDiv, StyledLink } from './styles';
import PropTypes from 'prop-types';
import { NavBar, ToggleTheme } from '@components';
export const Header = ({ Authenticated }) => {
  return (
    <Container>
      <div>
        <img src="logo.png" alt="company logo" />
        <h1>Connect Lab</h1>
      </div>
      {Authenticated ? (
        <FlexibleDiv>
          <NavBar />
          <ToggleTheme />
        </FlexibleDiv>
      ) : (
        <div>
          <StyledLink to={'/'}>LOGIN</StyledLink> <ToggleTheme />
        </div>
      )}
    </Container>
  );
};

Header.propTypes = {
  Authenticated: PropTypes.bool
};
