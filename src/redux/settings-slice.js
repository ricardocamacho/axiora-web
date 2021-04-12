/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { getCurrentLanguage, setCurrentLanguage } from '../helpers/Utils';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    locale: getCurrentLanguage()
  },
  reducers: {
    changeLocale(state, action) {
      setCurrentLanguage(action.payload);
      state.locale = action.payload;
    }
  }
});

export const { changeLocale } = settingsSlice.actions;

export default settingsSlice.reducer;
