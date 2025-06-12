import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import listingsReducer from '../features/listingsSlice';
import bookingsReducer from '../features/bookingsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    listings: listingsReducer,
    bookings: bookingsReducer,
  },
});