import { AuthContext } from './AuthContext'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const AuthProvider = ({ children }) => {
  const URL = import.meta.env.VITE_BASE_URL
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState(false)

  const axiosLogin = async (usuario, senha) => {
    const user = {
      email: usuario,
      password: senha
    }
    try {
      const res = await axios.post(`${URL}auth/login`, user)
      localStorage.setItem('@Token', res.data.token)
      localStorage.setItem('@ID', res.data.user._id)
      axiosGetUser(res.data.user._id)
    } catch (err) {
      return alert(err)
    }
  }

  const axiosCreateUser = data => {
    console.log('trying to create')
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
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const axiosGetUser = userId => {
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
      .then(res => {
        setUser(res.data)
        setAuth(true)
      })
  }

  const axiosUpdateUser = async data => {
    console.log('trying to update')
    const id = localStorage.getItem('@ID')
    const token = localStorage.getItem('@Token')
    if (!token || !id) {
      throw new Error('User not found')
    }
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
    try {
      const res = await axios.put(`${URL}users/${id}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const axiosGetLocations = async token => {
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

  const axiosUserAddDevice = (userData, deviceData, roomData) => {
    const token = localStorage.getItem('@Token')
    const config = {
      user: userData._id,
      device: deviceData._id,
      is_on: true,
      local: roomData.local,
      room: roomData.room
    }
    axios
      .post(`${URL}userDevices`, config, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => alert(err))
  }

  const axiosGetUserDevices = async (id, token) => {
    const res = await axios.get(`${URL}userDevices/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  }

  const axiosUpdateDeviceStatus = (deviceId, token) => {
    const config = {
      id: deviceId.status
    }
    axios.put(`${URL}userDevices/${deviceId}`, config, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    /*  returns this obj
  "_id": "631b76215516db091259eaae",
	"user": "631b6e3e61ef65fb3859152f",
	"device": "631b2f6b6f2d2f24a7c0c949",
	"local": "631b34696f2d2f24a7c0c960",
	"is_on": false,
	"room": "Quarto",
	"__v": 0 */
  }

  const axiosDeleteUserDevice = (deviceId, token) => {
    axios.delete(`${URL}userDevices/${deviceId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    /* "acknowledged": true, 
    "deletedCount": 1 */
  }

  // idea: !!localStorage.getItem('@Token') ? localStorage.getItem('@Token') : get from profile

  const handleLogout = () => {
    localStorage.clear('@Token')
    localStorage.clear('@ID')
    setAuth(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
        handleLogout,
        axiosLogin,
        axiosCreateUser,
        axiosGetUser,
        axiosGetUserDevices,
        axiosGetLocations,
        axiosUserAddDevice,
        axiosUpdateUser,
        axiosUpdateDeviceStatus,
        axiosDeleteUserDevice
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.node
}
