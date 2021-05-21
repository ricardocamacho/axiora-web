/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { adminRoot, currentUser } from '../constants/defaultValues';
import { getCurrentUser, setCurrentUser } from '../helpers/Utils';
import { auth } from '../helpers/Firebase';
import Api from '../helpers/api';

const api = new Api();

const isAuthGuardActive = false;

export const loginUser = createAsyncThunk(
  'users/loginUserStatus',
  async ({ user, history }) => {
    const userResponse = await api.loginUser(user.email, user.password);
    const loggedUser = { ...currentUser, ...userResponse };
    setCurrentUser(loggedUser);
    history.push(adminRoot);
    return loggedUser;
  }
);

export const forgotPassword = createAsyncThunk(
  'users/forgotPasswordStatus',
  async ({ user }) => {
    const sendEmailResponse = await auth.sendPasswordResetEmail(user.email);
    if (!sendEmailResponse) {
      return 'success';
    }
    return false;
  }
);

export const resetPassword = createAsyncThunk(
  'users/resetPasswordStatus',
  async ({ newPassword, resetPasswordCode }) => {
    const resetPasswordResponse = await auth.confirmPasswordReset(
      resetPasswordCode,
      newPassword
    );
    if (!resetPasswordResponse) {
      return 'success';
    }
    return false;
  }
);

export const registerUser = createAsyncThunk(
  'users/registerUserStatus',
  async ({ email, password, history }) => {
    const registerUserResponse = await api.signUp(email, password);
    const item = {
      email: registerUserResponse.email,
      token: registerUserResponse.token,
      ...currentUser
    };
    setCurrentUser(item);
    history.push(adminRoot);
    return item;
  }
);

const authUserSlice = createSlice({
  name: 'authUser',
  initialState: {
    currentUser: isAuthGuardActive ? currentUser : getCurrentUser(),
    forgotUserMail: '',
    newPassword: '',
    resetPasswordCode: '',
    loading: false,
    error: ''
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = '';
    },
    logoutUser: {
      reducer: state => {
        state.currentUser = null;
        state.error = '';
      },
      prepare: history => {
        setCurrentUser();
        history.push(adminRoot);
        return { payload: null };
      }
    }
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = '';
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.error = action.error && 'Usuario y/o contraseña inválida';
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.forgotUserMail = action.payload;
      state.error = '';
    },
    [forgotPassword.rejected]: (state, action) => {
      state.loading = false;
      state.forgotUserMail = '';
      state.error = action.error && action.error.message;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.newPassword = action.payload;
      state.resetPasswordCode = '';
      state.error = '';
    },
    [resetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.newPassword = '';
      state.resetPasswordCode = '';
      state.error = action.error && action.error.message;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = '';
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.error = action.error && 'Este usuario ya existe';
    }
  }
});

export const { setLoading, logoutUser } = authUserSlice.actions;

export default authUserSlice.reducer;
