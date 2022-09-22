import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 120px;
  justify-content: space-evenly;
  align-items: center;

  > img {
    width: 80px;
    height: 80px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
  > svg {
    margin-left: 15px;
  }
`;

export const List = styled.li`
  display: list-item;
  background: ${({ theme }) => theme.COLORS.COMMON.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: fit-content;
  width: 430px;
  margin: auto;
  padding: 20px;
`;
