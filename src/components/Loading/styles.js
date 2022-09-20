import styled from 'styled-components';

export const Spinner = styled.div`
  animation: spin 2s linear infinite;
  border: 16px solid ${({ theme }) => theme.COLORS.PRIMARY.LIGHT};
  border-top: 16px solid ${({ theme }) => theme.COLORS.PRIMARY.DARK};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  grid-area: content;
  margin: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
