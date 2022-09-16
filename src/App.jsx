import { BrowserRouter } from 'react-router-dom'
import { AppRoutes, AuthRoutes } from '@router'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@styles'
import { Header } from '@components'
import { useAuth } from '@contexts'

export function App() {
  const { auth } = useAuth()
  const isAuthenticated = auth

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header Authenticated={isAuthenticated} />
        <main>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</main>
      </ThemeProvider>
    </BrowserRouter>
  )
}
