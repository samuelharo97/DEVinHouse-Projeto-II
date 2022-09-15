import { BrowserRouter } from 'react-router-dom'
import { AppRoutes, AuthRoutes } from '@router'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@styles'
import { AuthProvider } from './contexts'
import { Header } from '@components'

export function App() {
  const isAuthenticated = true
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Header />
          <main>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</main>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
