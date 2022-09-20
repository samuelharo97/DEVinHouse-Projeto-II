import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 400px;

  > h3 {
    font-size: 48px;
    font-weight: 700;
    line-height: 62px;
  }

  > h5 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
    p {
      font-weight: 400;
      font-size: 24px;
      line-height: 31px;
    }
  }

  @media (max-width: 650px) {
    text-align: center;

    > div {
      flex-direction: column;
      text-align: center;
    }
  }
`;
