import { Button, ButtonText, Form, Header } from '@components'
import { Container } from './styles'

export const SignUp = () => {
  return (
    <>
      <Container>
        <Header Authenticated={false} />
        <Form>
          <Button color={'primary'} title={'CADASTRAR'} type={'submit'} />
          <ButtonText title={'Login'} />
        </Form>
      </Container>
    </>
  )
}
