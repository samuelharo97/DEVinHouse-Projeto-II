import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 105px;

  grid-area: header;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  align-items: center;

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
