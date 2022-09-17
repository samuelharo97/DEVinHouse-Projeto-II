/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@components'
import { Container, StyledLink } from './styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Header = ({ Authenticated }) => {
  return (
    <Container>
      <div>
        <img src="logo.png" alt="company logo" />
        <h1>Connect Lab</h1>
      </div>
      {Authenticated ? (
        <ul>
          <li>
            <Link to={'/'}> Inicio </Link>
          </li>
          <li>
            <Link to={'/devices'}> Dispositivos </Link>
          </li>
          <li>
            <Link to={'/profile'}> Perfil </Link>
          </li>
        </ul>
      ) : (
        <StyledLink to={'/'}>LOGIN</StyledLink>
      )}
    </Container>
  )
}

Header.propTypes = {
  Authenticated: PropTypes.bool
}
