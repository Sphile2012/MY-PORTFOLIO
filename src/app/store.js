import { configureStore } from '@reduxjs/toolkit';

// Import feature slices
import authReducer from '../features/authSlice';
import listingsReducer from '../features/listingsSlice';
import bookingsReducer from '../features/bookingsSlice';

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,         // Handles login, signup, user state
    listings: listingsReducer, // Manages Airbnb listings
    bookings: bookingsReducer, // Handles bookings and reservations
  },
});