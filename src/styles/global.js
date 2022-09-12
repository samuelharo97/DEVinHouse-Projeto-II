import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*, 
*::after, 
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
}

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: ${({ theme }) => theme.COLORS.COMMON.GRAY};
  height: 100vh;
  width: 100%;

}

p, h4 {
  color: ${({ theme }) => theme.COLORS.COMMON.GRAY_TEXT};
}

span {
  color: ${({ theme }) => theme.COLORS.SECONDARY.LIGHT};
}

a, button {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }

`
