import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 105px, 215px, 30px auto;
  grid-template-areas:
    'header'
    'temperature'
    'filter'
    'content';

  grid-row-gap: 20px;
`

export const Filter = styled.div`
  background-color: blue;
  height: 30px;
  width: 100%;
  grid-area: filter;
`
export const Footer = styled.footer`
  height: 100px;
  width: 100%;
`