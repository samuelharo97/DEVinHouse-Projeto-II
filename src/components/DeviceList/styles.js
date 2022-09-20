import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  gap: 40px;

  flex-wrap: wrap;
  list-style: none;
`

export const Container = styled.main`
  grid-area: content;
  text-align: center;
  width: 80%;
  justify-content: center;
  margin: auto;
  padding-left: 50px;
  > ul,
  li {
    list-style: none;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > input {
    width: 94%;
    height: 33px;
    border-radius: 3px;
    margin-bottom: 40px;
    border: none;
    padding-left: 10px;
  }

  > input:focus {
    outline: solid 1px ${({ theme }) => theme.COLORS.PRIMARY.LIGHT};
  }

  > label {
    text-align: left;
    color: ${({ theme }) => theme.COLORS.PRIMARY.DARK};
  }
`
