import { Button } from '@components'
import { Container } from './styles'

export const Header = () => {
  const Authenticated = true
  return (
    <Container>
      <div>
        <img src="logo.png" alt="company logo" />
        <h1>
          House Connect<span>ed</span>{' '}
        </h1>
      </div>
      {Authenticated ? (
        <ul>
          <li>Inicio</li>
          <li>Dispositivos</li>
          <li>Perfil</li>
        </ul>
      ) : (
        <Button title={'LOGIN'} />
      )}
    </Container>
  )
}
