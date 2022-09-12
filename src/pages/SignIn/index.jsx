import { Header, Login } from '@components'
import { Container } from './styles'

export const SignIn = () => {
  return (
    <>
      <Container>
        <Header Authenticated={true} />
        <Login />
      </Container>
    </>
  )
}
