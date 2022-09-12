import { Form, Header } from '@components'
import { Container } from './styles'

export const SignUp = () => {
  return (
    <>
      <Container>
        <Header Authenticated={false} />
        <Form />
      </Container>
    </>
  )
}
