import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async () => {
    const res = await axios.get('https://mocki.io/v1/0c51a1e2-63e2-4ff6-a3ec-15e55e4fdc14');
    return res.data;
  }
);

const listingsSlice = createSlice({
  name: 'listings',
  initialState: { items: [], status: 'idle', error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchListings.pending, state => { state.status = 'loading'; })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default listingsSlice.reducer;