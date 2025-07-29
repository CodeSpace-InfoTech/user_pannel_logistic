import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { toast } from 'react-toastify';

const API_URL = '/time-logs';

// Get all time logs
export const getTimeLogs = createAsyncThunk(
  'timeLogs/getTimeLogs',
  async (params = {}) => {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search = '',
      startDate,
      endDate,
      userId
    } = params;

    const queryParams = new URLSearchParams({
      page,
      limit,
      sortBy,
      sortOrder,
      search,
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
      ...(userId && { userId })
    });

   

    const response = await api.get(`${API_URL}?${queryParams}`);
   
    if(response.data.success) {
        console.log('response.data', response.data.data)
      return response.data.data;
    }
  }
);


