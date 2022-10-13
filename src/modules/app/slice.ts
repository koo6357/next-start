import { createSlice } from '@reduxjs/toolkit';

export interface AppStateType {
  themeMode: 'light' | 'dark';
}

const initialState: AppStateType = {
  themeMode: 'light',
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleThemeMode } = actions;

export default reducer;
