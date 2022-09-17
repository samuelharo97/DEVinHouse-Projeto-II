import axios from 'axios'

export const useAxios = () => {
  const URL = import.meta.env.VITE_BASE_URL

  const axiosGetDevices = async () => {
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

  return { axiosGetDevices }
}
