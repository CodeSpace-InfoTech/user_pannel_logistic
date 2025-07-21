import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { toast } from 'react-toastify';

const API_URL = '/customers';

// Get all customers
export const getCustomers = createAsyncThunk(
  'customers/getCustomers',
  async (params = {}) => {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search = '',
      status,
      company,
      paymentTerms,
      minCredit,
      maxCredit
    } = params;

    const queryParams = new URLSearchParams({
      page,
      limit,
      sortBy,
      sortOrder,
      search,
      ...(status && { status }),
      ...(company && { company }),
      ...(paymentTerms && { paymentTerms }),
      ...(minCredit && { minCredit }),
      ...(maxCredit && { maxCredit })
    });

    const response = await api.get(`${API_URL}?${queryParams}`);
    console.log('response', response.data.data.data)
    if(response.data.success) {
      return response.data.data;
    }
  }
);

// Create new customer
export const createCustomer = createAsyncThunk(
  'customers/createCustomer',
  async (customerData) => {
    const response = await api.post(API_URL, customerData);
    console.log('response.data', response.data)
    if(response.data.success){
      toast.success('Customer created successfully');
        return response.data.data;
    }
  }
);

// Update customer
export const updateCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async ({ id, customerData }) => {
    console.log('customerData', customerData)
    const response = await api.put(`${API_URL}/${id}`, customerData);
    console.log('response', response.data)
    if(response.data.success) {
      toast.success('Customer updated successfully');
        return response.data.data;
    }
  }
);

// Delete customer
export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    console.log('response.data', response.data)
    if(response.data.success){
      toast.success('Customer deleted successfully');
        return id;
    }
  }
);
