import { Button, ButtonText, Form, Header } from '@components'
import { Container } from './styles'

export const ProfileEdit = () => {
  return (
    <Container>
      <Header />
      <Form>
        <Button color={'primary'} title={'SALVAR'} type={'submit'} />
        <ButtonText routeTo={'/profile'} title={'Cancelar'} />
      </Form>
    </Container>
  )
}
