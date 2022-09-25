import { Button, ButtonText, Form } from '@components';
import { Container } from './styles';

export const ProfileEdit = () => {
  return (
    <Container>
      <Form title="Editar Perfil">
        <Button color={'primary'} title={'SALVAR'} type={'submit'} />
        <ButtonText routeTo={'/profile'} title={'Cancelar'} />
      </Form>
    </Container>
  );
};
