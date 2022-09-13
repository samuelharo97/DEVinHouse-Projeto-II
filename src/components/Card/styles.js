import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 386px;
  height: 120px;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 80px;
    height: 80px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`
