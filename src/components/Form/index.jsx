import {
  Formulary,
  InputWrapper,
  InputContainer,
  ActionWrapper
} from './styles'

import { useForm } from 'react-hook-form'
import { Button, WhiteLayer, ButtonText } from '@components'

export const Form = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm()

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
    <WhiteLayer top="50px">
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

        <ActionWrapper>
          <Button color={'primary'} title={'CADASTRAR'} type={'submit'} />
          <ButtonText title={'Login'} />
        </ActionWrapper>
      </Formulary>
    </WhiteLayer>
  )
}
