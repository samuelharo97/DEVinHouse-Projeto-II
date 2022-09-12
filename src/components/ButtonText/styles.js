import styled from 'styled-components'

export const Text = styled.a`
  color: ${({ theme }) => theme.COLORS.SECONDARY.MAIN};
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  align-self: center;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`
