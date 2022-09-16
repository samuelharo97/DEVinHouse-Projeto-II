import { WhiteLayer, Button, ButtonText } from '@components'
import { LoginForm } from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAxios } from '@hooks'
const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})

export const Login = () => {
  const { axiosLogin } = useAxios()

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const handleLogin = data => {
    const { email, password } = data
    axiosLogin(email, password)
  }

  return (
    <WhiteLayer>
      <LoginForm onSubmit={handleSubmit(handleLogin)}>
        <h2>Acessar</h2>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
            {...register('email')}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
            {...register('password')}
          />
        </div>
        <Button type={'submit'} title={'ACESSAR'} />
        <ButtonText routeTo="/register" title={'Cadastrar'} />
      </LoginForm>
    </WhiteLayer>
  )
}
