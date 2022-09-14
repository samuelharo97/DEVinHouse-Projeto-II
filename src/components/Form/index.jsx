import {
  Formulary,
  InputWrapper,
  InputContainer,
  ActionWrapper
} from './styles'

import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, WhiteLayer, ButtonText } from '@components'

const schema = yup.object().shape({
  email: yup.string().email().required,
  password: yup.string().required ,
  fullName: yup.string().required,
 photoUrl: yup.string().url() ,
  phone: yup. ,
  userAddress: {
      zipCode: ,
      street: ,
      number: ,
      neighborhood: ,
      city: ,
      state: ,
      complement: ,
  }
})

export const Form = ({ children }) => {
  const { register, handleSubmit, setValue, setFocus } = useForm()

  // lógica da função obtida através do estudo deste vídeo https://youtu.be/155ywtYSpdY
  const findZipcode = e => {
    const zipcode = e.target.value.replace(/\D/g, '')
    console.log(zipcode)
    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setValue('address', data.logradouro)
        setValue('city', data.localidade)
        setValue('district', data.bairro)
        setValue('zipcode', data.cep)
      })
  }

  const submitForm = () => {
    console.log('worked')
  }

  return (
    <WhiteLayer>
      <Formulary onSubmit={handleSubmit(submitForm)}>
        <h2>Cadastrar</h2>
        <InputWrapper>
          <InputContainer>
            <label htmlFor="name">Nome completo*</label>
            <input type="text" name="name" id="name" {...register('name')} />
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
            <label htmlFor="profile">URL foto perfil</label>
            <input
              type="url"
              name="profile"
              id="profile"
              {...register('profile')}
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
            <label htmlFor="zipcode">CEP*</label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              onBlurCapture={findZipcode}
              {...register('zipcode')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="address">Logradouro/Endereço*</label>
            <input
              type="text"
              name="address"
              id="address"
              {...register('address')}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="city">Cidade*</label>
            <input type="text" name="city" id="city" {...register('city')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="reference">Complemento</label>
            <input
              type="text"
              name="reference"
              id="reference"
              {...register('reference')}
            />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="addressNumber">Número*</label>
            <input
              type="number"
              name="addressNumber"
              id="addressNumber"
              {...register('addressNumber')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="district">Bairro*</label>
            <input
              type="text"
              name="district"
              id="district"
              {...register('district')}
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
