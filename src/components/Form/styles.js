import styled from 'styled-components'

export const Formulary = styled.form`
  color: ${({ theme }) => theme.COLORS.PRIMARY.DARK};

  h2 {
    color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
    text-align: center;
    padding-bottom: 28px;
  }

  text-align: center;

  label {
    text-align: left;
  }

  grid-area: content;
  align-self: center;
  justify-self: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 28px;
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
  input {
    width: 330px;
    height: 35px;
    border-radius: 5px;
    border: 0.5px solid ${({ theme }) => theme.COLORS.SECONDARY.LIGHT};
    background-color: ${({ theme }) => theme.COLORS.COMMON.WHITE};
  }
`
