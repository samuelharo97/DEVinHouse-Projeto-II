import styled from 'styled-components'

export const Container = styled.button`
  width: 120px;
  height: 35px;
  background-color: ${({ theme, color }) =>
    color === 'primary'
      ? theme.COLORS.PRIMARY.MAIN
      : theme.COLORS.SECONDARY.MAIN};

  color: ${({ theme }) => theme.COLORS.COMMON.WHITE};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`
