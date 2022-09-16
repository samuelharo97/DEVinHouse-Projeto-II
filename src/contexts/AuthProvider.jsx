import { AuthContext } from './AuthContext'
import PropTypes from 'prop-types'
import { useState } from 'react'
export const AuthProvider = ({ children }) => {
  const teste = 'Working'
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState(false)
  return (
    <AuthContext.Provider value={{ teste, user, setUser, auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.node
}
