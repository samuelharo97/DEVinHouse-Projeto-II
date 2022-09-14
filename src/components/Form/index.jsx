import {
  Formulary,
  InputWrapper,
  InputContainer,
  ActionWrapper
} from './styles'

import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { WhiteLayer } from '@components'

const errorMsg = 'Campo obrigatório'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required(),
  fullName: yup.string().required(),
  photoUrl: yup.string().url(),
  phone: yup.string(),
  userAddress: yup.string().required(),
  zipCode: yup.string().required(),
  number: yup.number().required(),
  neighborhood: yup.string().required(),
  city: yup.string().required(),
  complement: yup.string()
})

export const Form = ({ children }) => {
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  console.log(useForm())

  // lógica da função obtida através do estudo deste vídeo https://youtu.be/155ywtYSpdY
  const findZipcode = e => {
    const zipcode = e.target.value.replace(/\D/g, '')
    console.log(zipcode)
    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setValue('userAddress', data.logradouro)
        setValue('city', data.localidade)
        setValue('neighborhood', data.bairro)
        setValue('zipCode', data.cep)
      })
  }

  const submitForm = data => {
    console.log(data)
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
            {/* <span>{errors.fullName?.message}</span> */}
          </InputContainer>
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
            <label htmlFor="userAddress">Logradouro/Endereço*</label>
            <input
              type="text"
              name="userAddress"
              id="userAddress"
              {...register('userAddress')}
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

        <ActionWrapper>{children}</ActionWrapper>
      </Formulary>
    </WhiteLayer>
  )
}

Form.propTypes = {
  children: PropTypes.node
}
