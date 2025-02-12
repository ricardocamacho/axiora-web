import { createSlice } from '@reduxjs/toolkit';
import { AuthUser } from '../types';
import { createAppAsyncThunk, RootState } from './with-types';
import Api from '../api';
import { getCurrentUserFromLs, setCurrentUserToLs } from '../utils';

// TODO: move the following out later
const currentUser = getCurrentUserFromLs();
if (currentUser) {
  Api.setToken(currentUser.token);
}

export interface AuthUserSlice {
  currentUser: AuthUser | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: AuthUserSlice = {
  currentUser: getCurrentUserFromLs(),
  status: 'idle',
  error: null
};

export const loginUser = createAppAsyncThunk('users/login', async ({ email, password }: { email: string, password: string }) => {
  const response = await Api.loginUser(email, password);
  Api.setToken(response.token);
  setCurrentUserToLs(response);
  return response;
});

export const signupUser = createAppAsyncThunk('users/signup', async ({ email, password }:  { email: string, password: string }) => {
  const response = await Api.signUp(email, password);
  Api.setToken(response.token);
  setCurrentUserToLs(response);
  return response;
});

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.currentUser = null;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.currentUser = null;
        state.status = 'failed';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(signupUser.pending, (state) => {
        state.currentUser = null;
        state.status = 'pending';
        state.error = null;
      })
      .addCase(signupUser.rejected, (state) => {
        state.currentUser = null;
        state.status = 'failed';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = 'succeeded';
        state.error = null;
      });
  },
});

export const { logoutUser } = authUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.authUser.currentUser;
export const selectCurrentUserStatus = (state: RootState) => state.authUser.status;
export const selectCurrentUserError = (state: RootState) => state.authUser.error;

export default authUserSlice.reducer;
