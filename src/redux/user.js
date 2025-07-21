import {  createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { toast } from 'react-toastify';

const API_URL = '/auth';

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const response = await api.post(`${API_URL}/login`, credentials);
    if(response.data.success) {
      localStorage.setItem('token', response.data.data.token);
      toast.success('Logged in successfully');
      return response.data.data;
    }
  }
);



export const getProfile = createAsyncThunk(
  'auth/getCurrentUser',
  async () => {
    const response = await api.get(`${API_URL}/me`);
    if(response.data.success) {
    
      return response.data.data.user;
    }
  }
);



export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (email) => {
    const response = await api.post(`${API_URL}/password/forgot`, email);
    if(response.data.success) {
      toast.success('Password reset email sent');
      return response.data.data;
    }
  }
)

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data) => {
    const response = await api.post(`${API_URL}/reset-password`, data);
    if(response.data.success) {
      toast.success('Password reset successfully');
      return response.data.data;
    }
  }
)


export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (data) => {
    const response = await api.put(`${API_URL}/me/update`, data);
    if(response.data.success) {
      toast.success('Profile updated successfully');
      return response.data.data;
    }
  }
)


export const updateChangePassword = createAsyncThunk(
  'auth/updateChangePassword',
  async (data) => {
    const response = await api.put(`${API_URL}/password/update`, data);
    console.log('response.data.success', response.data.success)
    if(response.data.success) {
      toast.success('Password updated successfully');
      return response.data.data;
    }
  }
)