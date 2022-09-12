import { WhiteLayer, Button, ButtonText } from '@components'
import { LoginForm } from './styles'
import { useForm } from 'react-hook-form'

export const Login = () => {
  return (
    <WhiteLayer top="100px">
      <LoginForm>
        <h2>Acessar</h2>
        <div>
          <label htmlFor="loginEmail">E-mail</label>
          <input
            type="text"
            name="loginEmail"
            id="loginEmail"
            placeholder="Seu e-mail"
          />
        </div>
        <div>
          <label htmlFor="loginPassword">Senha</label>
          <input
            type="loginPassword"
            name="loginPassword"
            id="loginPassword"
            placeholder="Sua senha"
          />
        </div>
        <Button title={'ACESSAR'} />
        <ButtonText title={'Login'} />
      </LoginForm>
    </WhiteLayer>
  )
}
