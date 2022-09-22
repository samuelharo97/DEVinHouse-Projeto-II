import axios from 'axios';

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
      .then((res) => console.log(res))
      .catch((err) => alert(err));
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
    axios
      .put(`${URL}userDevices/${device._id}`, config, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const axiosCreateUser = (data) => {
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
    };
    axios
      .post(`${URL}auth/register`, newUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const axiosDeleteUserDevice = (deviceId, token) => {
    axios.delete(`${URL}userDevices/${deviceId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  return {
    axiosGetDevices,
    axiosGetLocations,
    axiosUserAddDevice,
    axiosGetUserDevices,
    axiosUpdateDeviceStatus,
    axiosCreateUser,
    axiosDeleteUserDevice
  };
};
