import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import dialogReducer from './slices/dialogSlice'; 
import employeeReducer from './slices/employees';
import customerReducer from './slices/customer';
import loadReducer from './slices/loadsSlice';
import userReducer from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    user:userReducer,
    dialog: dialogReducer, 
    employees: employeeReducer,
    customer:customerReducer,
    loads:loadReducer,
    users:userReducer,
  },
});

export const persistor = persistStore(store);