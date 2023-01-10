/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { validPassword } from '@utils';
import { useAuth } from '@contexts';
import { Formulary, InputContainer, InputWrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import { Button, WhiteLayer } from '@components';

const message = 'Campo obrigatório';

const schema = yup.object().shape({
  password: yup
    .string()
    .matches(validPassword, 'A senha deve conter: letras, números e caracteres especiais')
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .required(message),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não correspondem')
    .typeError('As senhas não correspondem')
    .required(message)
});

export const PasswordForm = ({ children }) => {
  const { axiosChangePassword } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    axiosChangePassword(data);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <WhiteLayer>
      <Formulary onSubmit={handleSubmit(submitForm)}>
        <InputWrapper>
          <InputContainer>
            <label htmlFor="password">
              Senha* <span>{errors.password?.message}</span>
            </label>
            <input
              type="password"
              placeholder="Sua senha"
              name="password"
              id="password"
              {...register('password')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="confirmPassword">
              Confirmar senha* <span>{errors.confirmPassword?.message}</span>
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              name="confirmPassword"
              id="confirmPassword"
              {...register('confirmPassword')}
            />
          </InputContainer>
        </InputWrapper>
      </Formulary>
      <Button title="CONFIRMAR"></Button>
    </WhiteLayer>
  );
};
