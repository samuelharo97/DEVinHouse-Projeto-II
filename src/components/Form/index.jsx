import { Formulary, InputWrapper, InputContainer, ActionWrapper, HiddenInput } from './styles';

import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { WhiteLayer } from '@components';
import { useAuth } from '@contexts';
import { useAxios } from '@hooks';

const message = 'Campo obrigatório';

const schema = yup.object().shape({
  email: yup.string().email().typeError('Digite um e-mail válido.').required(message),
  password: yup
    .string(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Deve conter 8 caracteres, um maiúsculo, um minúsculo, um número e um caractere'
    )
    .matches()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required(message),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não correspondem')
    .typeError('As senhas não correspondem')
    .required(message),
  fullName: yup.string().required(message),
  photoUrl: yup.string().typeError('URL Inválida').url(),
  phone: yup.number().notRequired().optional().nullable(),
  street: yup.string().required(message),
  zipCode: yup
    .string()
    .matches(/^[0-9]+$/, 'O CEP deve conter 8 números')
    .min(8, 'O CEP deve conter 8 números')
    .max(8, 'O CEP deve conter 8 números')
    .required(message),
  number: yup.number().typeError(message).required(message),
  neighborhood: yup.string().required(message),
  city: yup.string().required(message),
  complement: yup.string(message)
});

export const Form = ({ children, title }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const { axiosCreateUser } = useAxios();
  const { axiosUpdateUser } = useAuth();

  // lógica da função obtida através do estudo deste vídeo https://youtu.be/155ywtYSpdY
  const findZipcode = (e) => {
    const zipcode = e.target.value.replace(/\D/g, '');
    console.log(zipcode);
    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue('street', data.logradouro);
        setValue('city', data.localidade);
        setValue('neighborhood', data.bairro);
        setValue('state', data.uf);
      });
  };

  const submitForm = (data) => {
    title === 'Cadastrar' ? axiosCreateUser(data) : axiosUpdateUser(data);
  };

  return (
    <WhiteLayer>
      <Formulary onSubmit={handleSubmit(submitForm)}>
        <h2>{title}</h2>
        <InputWrapper>
          <InputContainer>
            <label htmlFor="fullName">
              Nome completo* <span>{errors.fullName?.message}</span>
            </label>
            <input type="text" name="fullName" id="fullName" {...register('fullName')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">
              E-mail* <span>{errors.email?.message}</span>
            </label>
            <input type="email" name="email" id="email" {...register('email')} />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="photoUrl">
              URL foto perfil <span>{errors.photoURL?.message}</span>
            </label>
            <input type="url" name="photoUrl" id="photoUrl" {...register('photoUrl')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phone">Telefone</label>
            <input type="tel" name="phone" id="phone" {...register('phone')} />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="password">
              Senha* <span>{errors.password?.message}</span>
            </label>
            <input type="password" name="password" id="password" {...register('password')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="confirmPassword">
              Confirmar senha* <span>{errors.confirmPassword?.message}</span>
            </label>
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
            <label htmlFor="zipCode">
              CEP* <span>{errors.zipCode?.message}</span>
            </label>
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              onBlurCapture={findZipcode}
              {...register('zipCode')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="street">
              Logradouro/Endereço* <span>{errors.street?.message}</span>
            </label>
            <input type="text" name="street" id="street" {...register('street')} />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="city">
              Cidade* <span>{errors.city?.message}</span>
            </label>
            <input type="text" name="city" id="city" {...register('city')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="complement">
              Complemento <span>{errors.complement?.message}</span>
            </label>
            <input type="text" name="complement" id="complement" {...register('complement')} />
          </InputContainer>
        </InputWrapper>

        <InputWrapper>
          <InputContainer>
            <label htmlFor="number">
              Número* <span>{errors.number?.message}</span>
            </label>
            <input type="number" name="number" id="number" {...register('number')} />
          </InputContainer>
          <InputContainer>
            <label htmlFor="neighborhood">
              Bairro* <span>{errors.neighborhood?.message}</span>
            </label>
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
  );
};

Form.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};
