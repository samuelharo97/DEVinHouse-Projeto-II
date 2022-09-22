import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 80%;
  flex-wrap: wrap;
  margin: auto;
  list-style: none;
`;

export const Container = styled.div`
  grid-area: content;
  text-align: center;
`;
