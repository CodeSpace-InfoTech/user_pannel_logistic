import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';


const API_URL = '/employees'; 

// Get all employees
export const getEmployees = createAsyncThunk(
  'employees/getEmployees',
  async () => {
    const response = await api.get(API_URL);

    if(response.data.success) {

        return response.data.data.data;
    }
  }
);

// Create new employee
export const createEmployee = createAsyncThunk(
  'employees/createEmployee',
  async (employeeData) => {
    const response = await api.post(API_URL, employeeData);
    console.log('response.data', response.data)
    if(response.data.success){

        return response.data.data;
    }
  }
);

// Update employee
export const updateEmployee = createAsyncThunk(
  'employees/updateEmployee',
  async ({ id, employeeData }) => {
    console.log('employeeData', employeeData)
    const response = await api.put(`${API_URL}/${id}`, employeeData);
    console.log('response', response.data)
    if(response.data.success) {

        return response.data.data;
    }
  }
);

// Delete employee
export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    console.log('response.data', response.data)
    if(response.data.success){

        return id;
    }
  }
);
