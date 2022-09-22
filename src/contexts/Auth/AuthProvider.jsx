/* eslint-disable react-hooks/exhaustive-deps */
import { AuthContext } from './AuthContext';
import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAxios } from '@hooks';

export const AuthProvider = ({ children }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  const token = localStorage.getItem('@Token');
  const id = localStorage.getItem('@ID');
  const { axiosGetUserDevices } = useAxios();

  const [allDevices, setAllDevices] = useState([]);

  const getDevices = useCallback(() => {
    axiosGetUserDevices().then((res) => setAllDevices(res.data));
  }, [axiosGetUserDevices]);

  const checkLogin = () => {
    if (token) {
      axiosGetUser(id);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const axiosLogin = async (usuario, senha) => {
    const user = {
      email: usuario,
      password: senha
    };
    try {
      const res = await axios.post(`${URL}auth/login`, user);
      localStorage.setItem('@Token', res.data.token);
      localStorage.setItem('@ID', res.data.user._id);
      axiosGetUser(res.data.user._id);
    } catch (err) {
      return console.error(err);
    }
  };

  const axiosGetUser = (userId) => {
    const token = localStorage.getItem('@Token');

    if (!token) {
      throw new Error('Token not found');
    }
    const id = userId;

    axios
      .get(`${URL}users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setUser(res.data);
        setAuth(true);
      });
  };

  const axiosUpdateUser = async (data) => {
    console.log('trying to update');
    const id = localStorage.getItem('@ID');
    const token = localStorage.getItem('@Token');
    if (!token || !id) {
      throw new Error('User not found');
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
    };
    try {
      const res = await axios.put(`${URL}users/${id}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.clear('@Token');
    localStorage.clear('@ID');
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
        handleLogout,
        axiosLogin,
        axiosGetUser,
        axiosUpdateUser,
        allDevices,
        getDevices
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node
};
