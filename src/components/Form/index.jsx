import {
  Formulary,
  InputWrapper,
  InputContainer,
  ActionWrapper,
  HiddenInput
} from './styles'

import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { WhiteLayer } from '@components'
import { axiosCreateUser, axiosUpdateUser } from '@services'

const errorMsg = 'Campo obrigatório'

const schema = yup.object().shape({
  email: yup.string().email().required(errorMsg),
  password: yup.string().required(errorMsg),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required(errorMsg),
  fullName: yup.string().required(errorMsg),
  photoUrl: yup.string().url(),
  phone: yup.string(),
  street: yup.string().required(errorMsg),
  zipCode: yup.string().required(errorMsg),
  number: yup.number().required(errorMsg),
  neighborhood: yup.string().required(errorMsg),
  city: yup.string().required(errorMsg),
  complement: yup.string(errorMsg)
})

export const Form = ({ children }) => {
  const { register, handleSubmit, setValue, errors } = useForm({
    resolver: yupResolver(schema)
  })


  // lógica da função obtida através do estudo deste vídeo https://youtu.be/155ywtYSpdY
  const findZipcode = e => {
    const zipcode = e.target.value.replace(/\D/g, '')
    console.log(zipcode)
    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setValue('street', data.logradouro)
        setValue('city', data.localidade)
        setValue('neighborhood', data.bairro)
        setValue('zipCode', data.cep)
        setValue('state', data.uf)
      })
  }

  const submitForm = data => {
    axiosUpdateUser(data)
  }

  return (
    <WhiteLayer>
      <Formulary onSubmit={handleSubmit(submitForm)}>
        <h2>Cadastrar</h2>
        <InputWrapper>
          <InputContainer>
            <label htmlFor="fullName">Nome completo*</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              {...register('fullName')}
            />
{/*             <span>{errors.fullName?.message}</span>
 */}          </InputContainer>
          <InputContainer>
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register('email')}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="photoUrl">URL foto perfil</label>
            <input
              type="url"
              name="photoUrl"
              id="photoUrl"
              {...register('photoUrl')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phone">Telefone</label>
            <input type="tel" name="phone" id="phone" {...register('phone')} />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="password">Senha*</label>
            <input
              type="password"
              name="password"
              id="password"
              {...register('password')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar senha*</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              {...register('confirmPassword')}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="zipCode">CEP*</label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              onBlurCapture={findZipcode}
              {...register('zipCode')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="street">Logradouro/Endereço*</label>
            <input
              type="text"
              name="street"
              id="street"
              {...register('street')}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="city">Cidade*</label>
            <input type="text" name="city" id="city" {...register('city')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              name="complement"
              id="complement"
              {...register('complement')}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="number">Número*</label>
            <input
              type="number"
              name="number"
              id="number"
              {...register('number')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="neighborhood">Bairro*</label>
            <input
              type="text"
              name="neighborhood"
              id="neighborhood"
              {...register('neighborhood')}
            />
          </InputContainer>
        </InputWrapper>
        <HiddenInput>
          <input type="text" name="state" id="state" {...register('state')} />
        </HiddenInput>

        <ActionWrapper>{children}</ActionWrapper>
      </Formulary>
    </WhiteLayer>
  )
}

Form.propTypes = {
  children: PropTypes.node
}
