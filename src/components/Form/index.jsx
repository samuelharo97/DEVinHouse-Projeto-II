import { Formulary, InputWrapper } from './styles'
import { useForm } from 'react-hook-form'
import { Button } from '@components'
export const Form = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm()

  const findZipcode = e => {
    console.log('oi')
    const zipcode = e.target.value.replace(/\D/g, '')
    console.log(zipcode)
    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setValue('address', data.logradouro)
        setValue('city', data.localidade)
        /* setValue('reference', data.complemento) */
        setValue('district', data.bairro)
      })
  }

  const submitForm = () => {
    console.log('worked')
  }

  return (
    <Formulary onSubmit={handleSubmit(submitForm)}>
      <InputWrapper>
        <>
          <label htmlFor="name">Nome completo*</label>
          <input type="text" name="name" id="name" {...register('name')} />
        </>
        <>
          <label htmlFor="email">E-mail*</label>
          <input type="email" name="email" id="email" {...register('email')} />
        </>
      </InputWrapper>

      <InputWrapper>
        <>
          <label htmlFor="profile">URL foto perfil</label>
          <input
            type="url"
            name="profile"
            id="profile"
            {...register('profile')}
          />
        </>
        <>
          <label htmlFor="phone">Telefone</label>
          <input type="tel" name="phone" id="phone" {...register('phone')} />
        </>
      </InputWrapper>

      <InputWrapper>
        <>
          <label htmlFor="password">Senha*</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register('password')}
          />
        </>
        <>
          <label htmlFor="confirmPassword">Confirmar senha*</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register('confirmPassword')}
          />
        </>
      </InputWrapper>

      <InputWrapper>
        <>
          <label htmlFor="zipcode">CEP*</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            onBlurCapture={findZipcode}
            {...register('zipcode')}
          />
        </>
        <>
          <label htmlFor="address">Logradouro/Endereço*</label>
          <input
            type="text"
            name="address"
            id="address"
            {...register('address')}
          />
        </>
      </InputWrapper>

      <InputWrapper>
        <>
          <label htmlFor="city">Cidade*</label>
          <input type="text" name="city" id="city" {...register('city')} />
        </>
        <>
          <label htmlFor="reference">Complemento</label>
          <input
            type="text"
            name="reference"
            id="reference"
            {...register('reference')}
          />
        </>
      </InputWrapper>

      <InputWrapper>
        <>
          <label htmlFor="addressNumber">Número*</label>
          <input
            type="number"
            name="addressNumber"
            id="addressNumber"
            {...register('addressNumber')}
          />
        </>
        <>
          <label htmlFor="district">Bairro*</label>
          <input
            type="text"
            name="district"
            id="district"
            {...register('district')}
          />
        </>
      </InputWrapper>

      <Button color={'primary'} title={'CADASTRAR'} type={'submit'} />
    </Formulary>
  )
}
