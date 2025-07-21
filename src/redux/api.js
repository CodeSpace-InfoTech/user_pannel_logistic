import axios from 'axios';
import { store } from './store';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_APP_URL, 
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An unknown error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);

export default api;