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
    'content'
    'content';
  > img {
    background-color: blue;
  }

  grid-row-gap: 20px;
`

export const Filter = styled.div`
  background-color: blue;
  height: 30px;
  width: 100%;
  grid-area: filter;
`
