import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-width: 480px;
  height: 105px;
  grid-area: header;
  margin-bottom: 20px;
  position: fixed;
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
`;

export const StyledLink = styled(Link)`
  width: 120px;
  color: ${({ theme }) => theme.COLORS.COMMON.WHITE};
  background-color: ${({ theme }) => theme.COLORS.SECONDARY.MAIN};
  height: 40px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  text-align: center;
  padding-top: 10px;
`;
