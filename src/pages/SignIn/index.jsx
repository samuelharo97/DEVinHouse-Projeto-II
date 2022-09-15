import { Header, Icon, Login } from '@components'
import { Container } from './styles'

export const SignIn = () => {
  return (
    <>
      <Container>
        <Header Authenticated={false} />
        <Login />
      </Container>
    </>
  )
}
