/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, StyledLink } from './styles';
import PropTypes from 'prop-types';
import { NavBar } from '@components';

export const Header = ({ Authenticated }) => {
  return (
    <Container>
      <div>
        <img src="logo.png" alt="company logo" />
        <h1>Connect Lab</h1>
      </div>
      {Authenticated ? <NavBar /> : <StyledLink to={'/'}>LOGIN</StyledLink>}
    </Container>
  );
};

Header.propTypes = {
  Authenticated: PropTypes.bool
};
