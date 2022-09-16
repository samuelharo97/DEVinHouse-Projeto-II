import axios from 'axios'
const URL = import.meta.env.VITE_BASE_URL

export const axiosLogin = async (usuario, senha) => {
  const user = {
    email: usuario,
    password: senha
  }
  try {
    const res = await axios.post(`${URL}auth/login`, user)
    localStorage.setItem('@Token', res.data.token)
    /* console.log(res.data.token) */
    axiosGetUser(res.data.user._id)
  } catch (err) {
    return alert(err)
  }
}

export const axiosCreateUser = data => {
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
  axios.post(`${URL}auth/register`, newUser)
  /* .then(res => localStorage.setItem('@userID', res.data._id))
    .catch(err => console.log(err)) */
}

export const axiosGetUser = userId => {
  const token = localStorage.getItem('@Token')
  if (!token) {
    throw new Error('Token not found')
  }
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

export const axiosUpdateUser = async data => {
  const token = localStorage.getItem('@Token')
  if (!token) {
    throw new Error('Token not found')
  }
  const id = localStorage.getItem('@userID')
  const updatedUser = {
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
  console.log(updatedUser, id, token)
  try {
    const res = await axios.put(`${URL}users/${id}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(res) // setUser(res.data)
  } catch (err) {
    console.log(err)
  }
}

export const axiosGetDevices = async () => {
  const token = localStorage.getItem('@Token')
  if (!token) {
    throw new Error('Token not found')
  }

  const res = await axios.get(`${URL}devices`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}

export const axiosGetLocations = async () => {
  const token = localStorage.getItem('@Token')
  try {
    const res = await axios.get(`${URL}locals`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (err) {
    alert(err)
  }
}

export const userAddDevice = (userData, deviceData, roomData) => {
  const token = localStorage.getItem('@Token')
  const config = {
    user: userData._id,
    device: deviceData._id,
    is_on: true,
    local: roomData.local,
    room: roomData.room
  }
  axios
    .post(`${URL}userDevices`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch(err => alert(err))
}

// idea: !!localStorage.getItem('@Token') ? localStorage.getItem('@Token') : get from profile
