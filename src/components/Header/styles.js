import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  min-width: 480px;
  height: 105px;

  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.COMMON.WHITE};

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

  a {
    color: ${({ theme }) => theme.COLORS.COMMON.WHITE};
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px;
    height: fit-content;
  }
`
