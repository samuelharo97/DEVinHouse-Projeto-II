import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { theme, GlobalStyles } from '@styles'
import { SignUp } from '@pages'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
