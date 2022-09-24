import axios from 'axios';
import { toast } from 'react-toastify';

export const useAxios = () => {
  const URL = import.meta.env.VITE_BASE_URL;

  const axiosGetDevices = async () => {
    const token = localStorage.getItem('@Token');
    if (!token) {
      throw new Error('Token not found');
    }

    const res = await axios.get(`${URL}devices`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  };

  const axiosGetLocations = async () => {
    const token = localStorage.getItem('@Token');
    try {
      const res = await axios.get(`${URL}locals`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data;
    } catch (err) {
      alert(err);
    }
  };

  const axiosUserAddDevice = (data) => {
    const token = localStorage.getItem('@Token');
    const id = localStorage.getItem('@ID');
    const config = {
      user: id,
      device: data.deviceId,
      is_on: true,
      local: data.local,
      room: data.room
    };
    axios
      .post(`${URL}userDevices`, config, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => toast.success('Item adicionado com sucesso'))
      .catch((err) => {
        console.err(err);
        toast.error('Falha ao adicionar o produto');
      });
  };

  const axiosGetUserDevices = async () => {
    const token = localStorage.getItem('@Token');
    const id = localStorage.getItem('@ID');
    const res = await axios.get(`${URL}userDevices/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res;
  };

  const axiosUpdateDeviceStatus = (device) => {
    const token = localStorage.getItem('@Token');
    const newStatus = !device.is_on;
    const config = {
      is_on: newStatus
    };
    const response = axios.put(`${URL}userDevices/${device._id}`, config, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  };

  const axiosCreateUser = (data) => {
    const newUser = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      photoUrl: data.photoUrl || null,
      phone: data.phone || null,
      userAddress: {
        zipCode: data.zipCode,
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state || null,
        complement: data.complement || null
      }
    };
    axios
      .post(`${URL}auth/register`, newUser)
      .then((res) => toast.success('Usuário criado com sucesso'))
      .catch((err) => {
        toast.error('Falha ao criar o usuário');
        console.error(err);
      });
  };

  const axiosDeleteUserDevice = (deviceId) => {
    const token = localStorage.getItem('@Token');
    axios
      .delete(`${URL}userDevices/${deviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        toast.success('Dispositivo removido com sucesso.');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Falha ao remover dispositivo, tente novamente.');
      });
  };

  const axiosGetDeviceById = (deviceId) => {
    const token = localStorage.getItem('@Token');
    const response = axios.get(`${URL}userDevices/${deviceId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  };

  return {
    axiosGetDevices,
    axiosGetLocations,
    axiosUserAddDevice,
    axiosGetUserDevices,
    axiosGetDeviceById,
    axiosUpdateDeviceStatus,
    axiosCreateUser,
    axiosDeleteUserDevice
  };
};
