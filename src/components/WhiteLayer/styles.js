import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  padding: 48px;
  margin-top: ${({ variant }) => variant};

  grid-area: content;
  margin: auto;
`
