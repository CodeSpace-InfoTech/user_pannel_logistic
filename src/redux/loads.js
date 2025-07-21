import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { toast } from 'react-toastify';

const API_URL = '/loads';

// Get all loads
export const getLoads = createAsyncThunk(
  'loads/getLoads',
  async ({ search = '', page = 1, limit = 10, status = '' } = {}) => {
    const queryParams = new URLSearchParams({
      ...(search && { search }),
      ...(status && { status }),
      page: page.toString(),
      limit: limit.toString()
    });
    
    const response = await api.get(`${API_URL}?${queryParams}`);
    if(response.data.success) {
      console.log('response.data', response.data.data)
      return response.data.data;
    }
  }
);

// Create new load
export const createLoad = createAsyncThunk(
  'loads/createLoad', 
  async (loadData) => {
    console.log('loadData', loadData)
    const response = await api.post(API_URL, loadData);
    if(response.data.success) {
      return response.data.data;
    }
  }
);

// Update load
export const updateLoad = createAsyncThunk(
  'loads/updateLoad',
  async ({ id, loadData }) => {
    const response = await api.put(`${API_URL}/${id}`, loadData);
    if(response.data.success) {
      console.log('response.data', response.data)
      toast.success('Load updated successfully');
      return response.data.data;
    }
  }
);

// Delete load
export const deleteLoad = createAsyncThunk(
  'loads/deleteLoad',
  async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    if(response.data.success) {
      return id;
    }
  }
);


export const getLoadDetails = createAsyncThunk(
  'loads/getLoadDetails',
  async (id) => {
    const response = await api.get(`${API_URL}/${id}`);
    if(response.data.success) {
      
      return response.data.data;
    }
  }
)

export const assignLoadsToEmployees = createAsyncThunk(
  'loads/assignLoadsToEmployees',
  async ({ loadId, employeeIds }) => {
  
    const response = await api.put(`${API_URL}/${loadId}/assign`, { employeeIds ,status:"assigned" });
    if(response.data.success) {
      return response.data.data;
    }
  }
);