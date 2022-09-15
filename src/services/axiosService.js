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
      localStorage.setItem('@Token', res.data.token)
      axiosGetUser(res.data.user._id)
    })
    .catch(err => alert(err))
}

export const axiosCreateUser = async data => {
  const newUser = {
    email: data.email,
    password: data.password,
    fullName: data.fullName,
    photoUrl: data.photoUrl || undefined,
    phone: data.phone || undefined,
    userAddress: {
      zipCode: data.zipCode,
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state || undefined,
      complement: data.complement || undefined
    }
  }
  axios
    .post(`${URL}auth/register`, newUser)
    .then(res => localStorage.setItem('@userID', res.data._id))
    .catch(err => console.log(err))
}

export const axiosGetUser = async userId => {
  const token = localStorage.getItem('@Token')
  const id = userId
  console.log(token)
  console.log(id)

  axios
    .get(`${URL}users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => console.log(res))
}
