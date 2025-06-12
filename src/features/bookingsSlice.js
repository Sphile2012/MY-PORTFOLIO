import { createSlice } from '@reduxjs/toolkit';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: [],
  reducers: {
    addBooking: (state, action) => { state.push(action.payload); },
  },
});

export const { addBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;