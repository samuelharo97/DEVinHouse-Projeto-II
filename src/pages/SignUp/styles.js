import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.COMMON.GRAY};
  height: 150vh;
  width: 100%;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';
`

export const Header = styled.header`
  grid-area: header;
  
`