import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 28px;

  > h3 {
    color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
    text-align: center;
  }

  > div {
    display: flex;
    gap: 12px;

    > div {
      display: flex;
      flex-direction: column;
      > section {
        color: ${({ theme }) => theme.COLORS.SECONDARY.DARK};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY.DARK};
        width: 100%;
      }
    }
    > img {
      height: 66px;
      width: 66px;
      border-radius: 50%;

      border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY.DARK};
      background-color: ${({ theme }) => theme.COLORS.COMMON.GRAY};
    }
  }
`
