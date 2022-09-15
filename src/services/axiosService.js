import axios from 'axios'
const URL = import.meta.env.VITE_BASE_URL

export const axiosLogin = async (usuario, senha) => {
  const user = {
    email: usuario,
    password: senha
  }
  return axios
    .post(`${URL}auth/login`, user)
    .then(res => {
      return localStorage.setItem('@Token', res.data.token)
    })
    .catch(err => alert(err))
}

export const createUser = async data => {
  const newUser = {}
}
