/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@components'
import { Container } from './styles'
import PropTypes from 'prop-types'

export const Header = ({ Authenticated = true }) => {
  return (
    <Container>
      <div>
        <img src="logo.png" alt="company logo" />
        <h1>Connect Lab</h1>
      </div>
      {Authenticated ? (
        <ul>
          <li>
            <a href="#"> Inicio </a>
          </li>
          <li>
            <a href="#"> Dispositivos </a>
          </li>
          <li>
            <a href="#"> Perfil </a>
          </li>
        </ul>
      ) : (
        <Button color={'secondary'} title={'LOGIN'} />
      )}
    </Container>
  )
}

Header.propTypes = {
  Authenticated: PropTypes.bool
}
