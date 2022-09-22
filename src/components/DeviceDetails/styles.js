import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  img {
    width: 100px;
    height: 100px;
  }

  section {
    border-bottom: 0.5px solid ${({ theme }) => theme.COLORS.SECONDARY.LIGHT};
  }

  aside {
    text-align: left;
  }
`;
