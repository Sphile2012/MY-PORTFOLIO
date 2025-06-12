import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    return { name: 'Phumeh User', email, token: 'abc123' };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', error: null },
  reducers: { logout: state => { state.user = null; } },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => { state.status = 'loading'; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;