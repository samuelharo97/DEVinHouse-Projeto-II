import styled from 'styled-components'

export const Container = styled.svg`
  fill: ${({ theme, variant }) =>
    variant ? theme.COLORS.SUCCESS.MAIN : theme.COLORS.COMMON.GRAY};

  &:hover {
    cursor: pointer;
  }
`
