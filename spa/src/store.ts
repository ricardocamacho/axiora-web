import { configureStore } from '@reduxjs/toolkit';
import { authUserSlice } from './redux/auth-slice';

export const store = configureStore({
  reducer: {
    authUser: authUserSlice.reducer,
  }
});
