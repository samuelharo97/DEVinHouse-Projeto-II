import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 105px;

  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.COMMON.WHITE};
  span {
    color: #9213a5cb;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 35px;
  }
  > ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
`
